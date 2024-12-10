'use client'
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Don't forget to import the CSS
import axios from "axios";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface Assignment {
  id: number;
  title: string;
  description: string;
  due_date: string;
  created_at: string;
  updated_at: string;
}

export default function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    class: "",
    assigment_id: "",
    link: "",
    description: "",
  });

  const [task, setTask] = useState<Assignment[]>([]); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get<Assignment[]>('/api/assignments'); // Add type assertion for API response
        setTask(response.data);
      } catch {
        toast.error("Failed to fetch assignments.");
      }
    };

    fetchAssignments();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await axios.post('/api/submissions', formData, {
      headers: {
        'Content-Type': "application/json"
      }
    })
      .then(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          telephone: "",
          class: "",
          link: "",
          description: "",
          assigment_id: ""
        })
        toast.success("Form submitted successfully!")
      })
      .catch(() => toast.error("An error occurred. Please try again."))

  };

  return (
    <>
      <Navbar />
      <Card className="mx-auto max-w-2xl mt-8 mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Submit Task</CardTitle>
          <CardDescription>
            Fill in the required details to submit your task
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="grid gap-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="telephone">Telephone</Label>
              <Input
                id="telephone"
                type="tel"
                placeholder="+1234567890"
                required
                value={formData.telephone}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="class">Assigment</Label>

              <Select onValueChange={(value) => handleSelectChange(value, 'assigment_id')} name="assigment_id">
                <SelectTrigger>
                  <SelectValue placeholder="Select your assignment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Assignment</SelectLabel>
                    {task.map((item: Assignment) => (
                      <SelectItem key={item.id} value={String(item.id)}>
                        {item.title}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

            </div>

            <div className="grid gap-2">
              <Label htmlFor="class">Class</Label>

              <Select onValueChange={(value) => handleSelectChange(value, 'class')} name="class">
                <SelectTrigger>
                  <SelectValue placeholder="Select your class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Class</SelectLabel>
                    <SelectItem value="X">X</SelectItem>
                    <SelectItem value="XI">XI</SelectItem>
                    <SelectItem value="XII">XII</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>



            <div className="grid gap-2">
              <Label htmlFor="link">Link</Label>
              <Input
                id="link"
                type="url"
                placeholder="https://example.com/task"
                required
                value={formData.link}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Write a brief description about your task"
                required
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
      <ToastContainer />
      <Footer />
    </>
  );
}