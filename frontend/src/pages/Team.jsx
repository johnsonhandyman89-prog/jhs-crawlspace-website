import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Loader2, LogOut, Upload, Check, User } from 'lucide-react';

const Team = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  const [user, setUser] = useState(null);

  // Auth form state
  const [authForm, setAuthForm] = useState({
    username: '',
    password: '',
    displayName: ''
  });

  // Lead form state
  const [leadForm, setLeadForm] = useState({
    homeownerName: '',
    propertyAddress: '',
    phoneNumber: '',
    emailAddress: '',
    confirmHomeowner: '',
    confirmCrawlspace: '',
    bestTimeForInspection: '',
    interestLevel: '',
    notes: ''
  });
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check for existing session on mount
  useEffect(() => {
    const checkSession = async () => {
      const token = localStorage.getItem('team_token');
      if (token) {
        try {
          const response = await fetch('/api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'verify', token })
          });
          const data = await response.json();
          if (data.valid) {
            setIsAuthenticated(true);
            setUser(data.user);
          } else {
            localStorage.removeItem('team_token');
          }
        } catch (error) {
          console.error('Session check failed:', error);
          localStorage.removeItem('team_token');
        }
      }
      setIsLoading(false);
    };
    checkSession();
  }, []);

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: authMode,
          username: authForm.username,
          password: authForm.password,
          displayName: authForm.displayName || authForm.username
        })
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('team_token', data.token);
        setUser(data.user);
        setIsAuthenticated(true);
        toast.success(authMode === 'login' ? 'Welcome back!' : 'Account created successfully!');
      } else {
        toast.error(data.error || 'Authentication failed');
      }
    } catch (error) {
      toast.error('Connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = async () => {
    const token = localStorage.getItem('team_token');
    if (token) {
      try {
        await fetch('/api/auth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'logout', token })
        });
      } catch (error) {
        console.error('Logout error:', error);
      }
    }
    localStorage.removeItem('team_token');
    setIsAuthenticated(false);
    setUser(null);
    setAuthForm({ username: '', password: '', displayName: '' });
    toast.success('Logged out successfully');
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error('Photo must be less than 10MB');
        return;
      }
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onload = (e) => setPhotoPreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();

    // Validate required photo
    if (!photoFile) {
      toast.error('Photo of front of home is required');
      return;
    }

    setIsSubmitting(true);

    try {
      const token = localStorage.getItem('team_token');
      const formData = new FormData();
      formData.append('token', token);
      formData.append('homeownerName', leadForm.homeownerName);
      formData.append('propertyAddress', leadForm.propertyAddress);
      formData.append('phoneNumber', leadForm.phoneNumber);
      formData.append('emailAddress', leadForm.emailAddress);
      formData.append('confirmHomeowner', leadForm.confirmHomeowner);
      formData.append('confirmCrawlspace', leadForm.confirmCrawlspace);
      formData.append('bestTimeForInspection', leadForm.bestTimeForInspection);
      formData.append('interestLevel', leadForm.interestLevel);
      formData.append('notes', leadForm.notes);
      formData.append('photo', photoFile);

      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        // Submit to Netlify Forms from browser to trigger email notifications
        // (Server-side submissions to Netlify Forms don't reliably trigger notifications)
        if (data.formData) {
          try {
            const netlifyFormData = new URLSearchParams();
            netlifyFormData.append('form-name', 'team-lead');
            Object.entries(data.formData).forEach(([key, value]) => {
              netlifyFormData.append(key, value);
            });

            await fetch('/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: netlifyFormData.toString()
            });
          } catch (formError) {
            console.error('Netlify Forms notification error:', formError);
            // Don't fail the submission - data is already saved
          }
        }

        toast.success('Lead submitted successfully!');
        // Reset form
        setLeadForm({
          homeownerName: '',
          propertyAddress: '',
          phoneNumber: '',
          emailAddress: '',
          confirmHomeowner: '',
          confirmCrawlspace: '',
          bestTimeForInspection: '',
          interestLevel: '',
          notes: ''
        });
        setPhotoFile(null);
        setPhotoPreview(null);
      } else {
        toast.error(data.error || 'Submission failed');
      }
    } catch (error) {
      toast.error('Connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-tennessee-orange-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">The Moisture Crew</h1>
          <p className="text-gray-600">Team Sign-In</p>
        </div>

        {!isAuthenticated ? (
          /* Auth Form */
          <Card>
            <CardHeader>
              <CardTitle>{authMode === 'login' ? 'Sign In' : 'Create Account'}</CardTitle>
              <CardDescription>
                {authMode === 'login'
                  ? 'Enter your credentials to access the portal'
                  : 'Create a new account to start submitting leads'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAuthSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    value={authForm.username}
                    onChange={(e) => setAuthForm({ ...authForm, username: e.target.value })}
                    required
                    autoComplete="username"
                    className="bg-white"
                  />
                </div>

                {authMode === 'signup' && (
                  <div className="space-y-2">
                    <Label htmlFor="displayName">Display Name</Label>
                    <Input
                      id="displayName"
                      type="text"
                      value={authForm.displayName}
                      onChange={(e) => setAuthForm({ ...authForm, displayName: e.target.value })}
                      placeholder="How your name will appear on submissions"
                      className="bg-white"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={authForm.password}
                    onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
                    required
                    minLength={6}
                    autoComplete={authMode === 'login' ? 'current-password' : 'new-password'}
                    className="bg-white"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-tennessee-orange-600 hover:bg-tennessee-orange-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  ) : null}
                  {authMode === 'login' ? 'Sign In' : 'Create Account'}
                </Button>

                <div className="text-center pt-4">
                  <button
                    type="button"
                    className="text-tennessee-orange-600 hover:text-tennessee-orange-700 text-sm"
                    onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                  >
                    {authMode === 'login'
                      ? "Don't have an account? Sign up"
                      : 'Already have an account? Sign in'}
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        ) : (
          /* Lead Submission Form */
          <div className="space-y-4">
            {/* User header */}
            <Card className="bg-tennessee-orange-50 border-tennessee-orange-200">
              <CardContent className="py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-tennessee-orange-600" />
                    <span className="font-medium">{user?.displayName || user?.username}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLogout}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <LogOut className="h-4 w-4 mr-1" />
                    Sign Out
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Lead Form */}
            <Card>
              <CardHeader>
                <CardTitle>Submit New Lead</CardTitle>
                <CardDescription>Enter the homeowner's information below</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  {/* Homeowner Name */}
                  <div className="space-y-2">
                    <Label htmlFor="homeownerName">Homeowner Name *</Label>
                    <Input
                      id="homeownerName"
                      type="text"
                      value={leadForm.homeownerName}
                      onChange={(e) => setLeadForm({ ...leadForm, homeownerName: e.target.value })}
                      required
                      className="bg-white"
                    />
                  </div>

                  {/* Property Address */}
                  <div className="space-y-2">
                    <Label htmlFor="propertyAddress">Property Address *</Label>
                    <Input
                      id="propertyAddress"
                      type="text"
                      value={leadForm.propertyAddress}
                      onChange={(e) => setLeadForm({ ...leadForm, propertyAddress: e.target.value })}
                      required
                      className="bg-white"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number *</Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      value={leadForm.phoneNumber}
                      onChange={(e) => setLeadForm({ ...leadForm, phoneNumber: e.target.value })}
                      required
                      className="bg-white"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <Label htmlFor="emailAddress">Email Address</Label>
                    <Input
                      id="emailAddress"
                      type="email"
                      value={leadForm.emailAddress}
                      onChange={(e) => setLeadForm({ ...leadForm, emailAddress: e.target.value })}
                      className="bg-white"
                    />
                  </div>

                  {/* Confirm Homeowner */}
                  <div className="space-y-2">
                    <Label>Confirm Homeowner *</Label>
                    <Select
                      value={leadForm.confirmHomeowner}
                      onValueChange={(value) => setLeadForm({ ...leadForm, confirmHomeowner: value })}
                      required
                    >
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Confirm Crawlspace Present */}
                  <div className="space-y-2">
                    <Label>Confirm Crawlspace Present *</Label>
                    <Select
                      value={leadForm.confirmCrawlspace}
                      onValueChange={(value) => setLeadForm({ ...leadForm, confirmCrawlspace: value })}
                      required
                    >
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Best Time for Inspection */}
                  <div className="space-y-2">
                    <Label>Best Time for Inspection *</Label>
                    <Select
                      value={leadForm.bestTimeForInspection}
                      onValueChange={(value) => setLeadForm({ ...leadForm, bestTimeForInspection: value })}
                      required
                    >
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Morning">Morning</SelectItem>
                        <SelectItem value="Afternoon">Afternoon</SelectItem>
                        <SelectItem value="Evening">Evening</SelectItem>
                        <SelectItem value="Weekend">Weekend</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Interest Level */}
                  <div className="space-y-2">
                    <Label>Interest Level *</Label>
                    <Select
                      value={leadForm.interestLevel}
                      onValueChange={(value) => setLeadForm({ ...leadForm, interestLevel: value })}
                      required
                    >
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Low">Low</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="High">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Notes / Concerns */}
                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes / Concerns</Label>
                    <Textarea
                      id="notes"
                      value={leadForm.notes}
                      onChange={(e) => setLeadForm({ ...leadForm, notes: e.target.value })}
                      placeholder="Any additional notes or concerns..."
                      rows={3}
                      className="bg-white"
                    />
                  </div>

                  {/* Photo Upload */}
                  <div className="space-y-2">
                    <Label>Photo Upload - Front of Home *</Label>
                    <div
                      className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                        photoPreview
                          ? 'border-tennessee-orange-300 bg-tennessee-orange-50'
                          : 'border-gray-300 hover:border-tennessee-orange-300 hover:bg-gray-50'
                      }`}
                      onClick={() => document.getElementById('photo-upload').click()}
                    >
                      {photoPreview ? (
                        <div className="space-y-2">
                          <img
                            src={photoPreview}
                            alt="Preview"
                            className="max-h-48 mx-auto rounded"
                          />
                          <div className="flex items-center justify-center gap-2 text-tennessee-orange-600">
                            <Check className="h-4 w-4" />
                            <span className="text-sm">{photoFile?.name}</span>
                          </div>
                          <p className="text-xs text-gray-500">Click to change photo</p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Upload className="h-8 w-8 mx-auto text-gray-400" />
                          <p className="text-sm text-gray-600">Click to upload photo</p>
                          <p className="text-xs text-gray-400">JPG, PNG up to 10MB</p>
                        </div>
                      )}
                      <input
                        id="photo-upload"
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        className="hidden"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-tennessee-orange-600 hover:bg-tennessee-orange-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Lead'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
