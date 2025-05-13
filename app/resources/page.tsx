import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResourceCard } from "@/components/resource-card"
import { Search, Filter } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Resources</h1>
          <p className="text-muted-foreground">Browse all pharmacy educational resources</p>
        </div>
        <div className="relative w-full md:w-auto">
          <Input type="search" placeholder="Search resources..." className="w-full md:w-[300px] pl-10" />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-card rounded-lg border p-4">
            <h3 className="font-medium mb-4 flex items-center gap-2">
              <Filter className="h-4 w-4" /> Filters
            </h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Resource Type</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="notes">Notes</SelectItem>
                    <SelectItem value="past-papers">Past Papers</SelectItem>
                    <SelectItem value="model-answers">Model Answers</SelectItem>
                    <SelectItem value="study-guides">Study Guides</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Year</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="1">Year 1</SelectItem>
                    <SelectItem value="2">Year 2</SelectItem>
                    <SelectItem value="3">Year 3</SelectItem>
                    <SelectItem value="4">Year 4</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Semester</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Semesters</SelectItem>
                    <SelectItem value="1">Semester 1</SelectItem>
                    <SelectItem value="2">Semester 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Module</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select module" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Modules</SelectItem>
                    <SelectItem value="pharmacology">Pharmacology</SelectItem>
                    <SelectItem value="medicinal-chemistry">Medicinal Chemistry</SelectItem>
                    <SelectItem value="pharmaceutics">Pharmaceutics</SelectItem>
                    <SelectItem value="clinical-pharmacy">Clinical Pharmacy</SelectItem>
                    <SelectItem value="pharmacy-practice">Pharmacy Practice</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">File Format</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Formats</SelectItem>
                    <SelectItem value="pdf">PDF</SelectItem>
                    <SelectItem value="docx">DOCX</SelectItem>
                    <SelectItem value="pptx">PPTX</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
              <TabsTrigger value="past-papers">Past Papers</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ResourceCard
                  title="Pharmacology Exam 2024"
                  type="Past Paper"
                  year={3}
                  semester={1}
                  fileSize="2.4 MB"
                  fileType="PDF"
                  downloads={124}
                  date="May 1, 2024"
                />
                <ResourceCard
                  title="Medicinal Chemistry Notes"
                  type="Lecture Notes"
                  year={2}
                  semester={2}
                  fileSize="5.1 MB"
                  fileType="PDF"
                  downloads={87}
                  date="April 28, 2024"
                />
                <ResourceCard
                  title="Pharmaceutical Calculations"
                  type="Study Guide"
                  year={1}
                  semester={1}
                  fileSize="3.7 MB"
                  fileType="PDF"
                  downloads={156}
                  date="April 25, 2024"
                />
                <ResourceCard
                  title="Clinical Pharmacy Case Studies"
                  type="Lecture Notes"
                  year={4}
                  semester={1}
                  fileSize="8.2 MB"
                  fileType="PDF"
                  downloads={92}
                  date="April 20, 2024"
                />
                <ResourceCard
                  title="Pharmaceutics Lab Manual"
                  type="Study Guide"
                  year={2}
                  semester={1}
                  fileSize="10.5 MB"
                  fileType="PDF"
                  downloads={78}
                  date="April 15, 2024"
                />
                <ResourceCard
                  title="Pharmacy Ethics Midterm"
                  type="Past Paper"
                  year={3}
                  semester={2}
                  fileSize="1.8 MB"
                  fileType="PDF"
                  downloads={110}
                  date="April 10, 2024"
                />
              </div>
              <div className="mt-8 flex justify-center">
                <Button variant="outline">Load More</Button>
              </div>
            </TabsContent>
            <TabsContent value="notes" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ResourceCard
                  title="Medicinal Chemistry Notes"
                  type="Lecture Notes"
                  year={2}
                  semester={2}
                  fileSize="5.1 MB"
                  fileType="PDF"
                  downloads={87}
                  date="April 28, 2024"
                />
                <ResourceCard
                  title="Clinical Pharmacy Case Studies"
                  type="Lecture Notes"
                  year={4}
                  semester={1}
                  fileSize="8.2 MB"
                  fileType="PDF"
                  downloads={92}
                  date="April 20, 2024"
                />
                <ResourceCard
                  title="Pharmacokinetics Comprehensive Notes"
                  type="Lecture Notes"
                  year={3}
                  semester={1}
                  fileSize="6.7 MB"
                  fileType="PDF"
                  downloads={65}
                  date="April 5, 2024"
                />
              </div>
            </TabsContent>
            <TabsContent value="past-papers" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ResourceCard
                  title="Pharmacology Exam 2024"
                  type="Past Paper"
                  year={3}
                  semester={1}
                  fileSize="2.4 MB"
                  fileType="PDF"
                  downloads={124}
                  date="May 1, 2024"
                />
                <ResourceCard
                  title="Pharmacy Ethics Midterm"
                  type="Past Paper"
                  year={3}
                  semester={2}
                  fileSize="1.8 MB"
                  fileType="PDF"
                  downloads={110}
                  date="April 10, 2024"
                />
              </div>
            </TabsContent>
            <TabsContent value="popular" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ResourceCard
                  title="Pharmaceutical Calculations"
                  type="Study Guide"
                  year={1}
                  semester={1}
                  fileSize="3.7 MB"
                  fileType="PDF"
                  downloads={156}
                  date="April 25, 2024"
                />
                <ResourceCard
                  title="Pharmacology Exam 2024"
                  type="Past Paper"
                  year={3}
                  semester={1}
                  fileSize="2.4 MB"
                  fileType="PDF"
                  downloads={124}
                  date="May 1, 2024"
                />
                <ResourceCard
                  title="Pharmacy Ethics Midterm"
                  type="Past Paper"
                  year={3}
                  semester={2}
                  fileSize="1.8 MB"
                  fileType="PDF"
                  downloads={110}
                  date="April 10, 2024"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
