import { getStore } from "@netlify/blobs";
import bcrypt from "bcryptjs";

export default async (req, context) => {
  const method = req.method;

  if (method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const body = await req.json();
    const { action, username, password, displayName } = body;

    const store = getStore("team-users");

    if (action === "signup") {
      // Check if user already exists
      const existingUser = await store.get(username.toLowerCase(), { type: "json" });
      if (existingUser) {
        return new Response(JSON.stringify({ error: "Username already exists" }), {
          status: 400,
          headers: { "Content-Type": "application/json" }
        });
      }

      // Hash password and create user
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = {
        username: username.toLowerCase(),
        displayName: displayName || username,
        passwordHash: hashedPassword,
        createdAt: new Date().toISOString()
      };

      await store.setJSON(username.toLowerCase(), user);

      // Generate simple session token
      const sessionToken = `${username.toLowerCase()}-${Date.now()}-${Math.random().toString(36).substring(7)}`;
      const sessionStore = getStore("team-sessions");
      await sessionStore.setJSON(sessionToken, {
        username: username.toLowerCase(),
        displayName: user.displayName,
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days
      });

      return new Response(JSON.stringify({
        success: true,
        token: sessionToken,
        user: { username: user.username, displayName: user.displayName }
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (action === "login") {
      const user = await store.get(username.toLowerCase(), { type: "json" });
      if (!user) {
        return new Response(JSON.stringify({ error: "Invalid username or password" }), {
          status: 401,
          headers: { "Content-Type": "application/json" }
        });
      }

      const passwordMatch = await bcrypt.compare(password, user.passwordHash);
      if (!passwordMatch) {
        return new Response(JSON.stringify({ error: "Invalid username or password" }), {
          status: 401,
          headers: { "Content-Type": "application/json" }
        });
      }

      // Generate session token
      const sessionToken = `${username.toLowerCase()}-${Date.now()}-${Math.random().toString(36).substring(7)}`;
      const sessionStore = getStore("team-sessions");
      await sessionStore.setJSON(sessionToken, {
        username: username.toLowerCase(),
        displayName: user.displayName,
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days
      });

      return new Response(JSON.stringify({
        success: true,
        token: sessionToken,
        user: { username: user.username, displayName: user.displayName }
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (action === "verify") {
      const { token } = body;
      const sessionStore = getStore("team-sessions");
      const session = await sessionStore.get(token, { type: "json" });

      if (!session) {
        return new Response(JSON.stringify({ valid: false }), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      }

      // Check if session is expired
      if (new Date(session.expiresAt) < new Date()) {
        await sessionStore.delete(token);
        return new Response(JSON.stringify({ valid: false }), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      }

      return new Response(JSON.stringify({
        valid: true,
        user: { username: session.username, displayName: session.displayName }
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (action === "logout") {
      const { token } = body;
      const sessionStore = getStore("team-sessions");
      await sessionStore.delete(token);

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({ error: "Invalid action" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("Auth error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

export const config = {
  path: "/api/auth"
};
