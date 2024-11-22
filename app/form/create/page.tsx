"use client";

import { useState } from "react";
import Link from "next/link";
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
import ModeToggle from "@/components/toggle";

export default function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    class: "",
    subjects: "",
    link: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/form/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      alert("Form submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <ModeToggle />
      <Card className="mx-auto max-w-2xl mt-8">
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
              <Label htmlFor="class">Class</Label>
              <Input
                id="class"
                type="text"
                placeholder="10th Grade"
                required
                value={formData.class}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="subjects">Subjects</Label>
              <Input
                id="subjects"
                type="text"
                placeholder="Mathematics, Science"
                required
                value={formData.subjects}
                onChange={handleChange}
              />
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
    </div>
  );
}
