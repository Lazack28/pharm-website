"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { BarChart, FileUp, Users, Download, FileText, Star, Search } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage resources and monitor site activity</p>
        </div>
        <Button asChild>
          <Link href="/admin/resources/new">
            <FileUp className="mr-2 h-4 w-4" /> Upload New Resource
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Downloads</p>
                <h3 className="text-3xl font-bold">12,543</h3>
                <p className="text-xs text-green-500 mt-1">+12% from last month</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Download className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Resources</p>
                <h3 className="text-3xl font-bold">256</h3>
                <p className="text-xs text-green-500 mt-1">+8 new this week</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Active Users</p>
                <h3 className="text-3xl font-bold">1,892</h3>
                <p className="text-xs text-green-500 mt-1">+24% from last month</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Avg. Rating</p>
                <h3 className="text-3xl font-bold">4.7</h3>
                <p className="text-xs text-green-500 mt-1">+0.2 from last month</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Star className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="resources" className="mb-8">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
        </TabsList>

        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <CardTitle>Manage Resources</CardTitle>
                  <CardDescription>Upload, edit, and delete resources</CardDescription>
                </div>
                <div className="relative">
                  <Input type="search" placeholder="Search resources..." className="w-full md:w-[300px] pl-10" />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="[&_tr]:border-b">
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-12 px-4 text-left align-middle font-medium">Title</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Type</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Year</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Downloads</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Date Added</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="[&_tr:last-child]:border-0">
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle">Pharmacology Exam 2024</td>
                        <td className="p-4 align-middle">Past Paper</td>
                        <td className="p-4 align-middle">3</td>
                        <td className="p-4 align-middle">124</td>
                        <td className="p-4 align-middle">May 1, 2024</td>
                        <td className="p-4 align-middle">
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                            <Button variant="ghost" size="sm" className="text-destructive">
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle">Medicinal Chemistry Notes</td>
                        <td className="p-4 align-middle">Lecture Notes</td>
                        <td className="p-4 align-middle">2</td>
                        <td className="p-4 align-middle">87</td>
                        <td className="p-4 align-middle">April 28, 2024</td>
                        <td className="p-4 align-middle">
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                            <Button variant="ghost" size="sm" className="text-destructive">
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle">Pharmaceutical Calculations</td>
                        <td className="p-4 align-middle">Study Guide</td>
                        <td className="p-4 align-middle">1</td>
                        <td className="p-4 align-middle">156</td>
                        <td className="p-4 align-middle">April 25, 2024</td>
                        <td className="p-4 align-middle">
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                            <Button variant="ghost" size="sm" className="text-destructive">
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex items-center justify-end space-x-2 py-4">
                <Button variant="outline" size="sm">
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Overview</CardTitle>
              <CardDescription>View download statistics and user activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border rounded-md bg-muted/20">
                <div className="text-center">
                  <BarChart className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium">Analytics Dashboard</h3>
                  <p className="text-muted-foreground">Charts and graphs would be displayed here</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Most Downloaded Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex justify-between items-center">
                        <span>Pharmaceutical Calculations</span>
                        <span className="font-medium">156 downloads</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Pharmacology Exam 2024</span>
                        <span className="font-medium">124 downloads</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Pharmacy Ethics Midterm</span>
                        <span className="font-medium">110 downloads</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Clinical Pharmacy Case Studies</span>
                        <span className="font-medium">92 downloads</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Medicinal Chemistry Notes</span>
                        <span className="font-medium">87 downloads</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">User Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex justify-between items-center">
                        <span>New Registrations (This Week)</span>
                        <span className="font-medium">48 users</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Active Users (Today)</span>
                        <span className="font-medium">215 users</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Resource Comments (This Week)</span>
                        <span className="font-medium">87 comments</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Average Session Duration</span>
                        <span className="font-medium">12 minutes</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Mobile vs Desktop</span>
                        <span className="font-medium">65% / 35%</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>This feature will be available in a future update</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-8 text-center">
                <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">User Management Coming Soon</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  User authentication and management features will be implemented in a future update. Currently focusing
                  on providing educational resources without requiring login.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Upload New Resource Form */}
      <Card>
        <CardHeader>
          <CardTitle>Upload New Resource</CardTitle>
          <CardDescription>Add a new resource to the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Enter resource title" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="type">Resource Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="notes">Lecture Notes</SelectItem>
                    <SelectItem value="past-paper">Past Paper</SelectItem>
                    <SelectItem value="model-answer">Model Answer</SelectItem>
                    <SelectItem value="study-guide">Study Guide</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Year 1</SelectItem>
                    <SelectItem value="2">Year 2</SelectItem>
                    <SelectItem value="3">Year 3</SelectItem>
                    <SelectItem value="4">Year 4</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="semester">Semester</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Semester 1</SelectItem>
                    <SelectItem value="2">Semester 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="module">Module</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select module" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pharmacology">Pharmacology</SelectItem>
                  <SelectItem value="medicinal-chemistry">Medicinal Chemistry</SelectItem>
                  <SelectItem value="pharmaceutics">Pharmaceutics</SelectItem>
                  <SelectItem value="clinical-pharmacy">Clinical Pharmacy</SelectItem>
                  <SelectItem value="pharmacy-practice">Pharmacy Practice</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Enter a brief description of the resource" rows={4} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="file">Upload File</Label>
              <Input id="file" type="file" />
            </div>

            <Button type="submit">Upload Resource</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
