"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Don't forget to import the CSS

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


import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function Page({ params }: { params: { id: string } }) {
    const [formData, setFormData] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        class: "",
        subjects: "",
        link: "",
        description: "",
    });

    // Fetch job data on component mount
    useEffect(() => {
        const fetchJobData = async () => {
            try {
                const response = await fetch(`/api/jobs/${params.id}`);
                const data = await response.json();

                if (response.ok && data) {
                    setFormData({
                        id: data.id,
                        firstName: data.first_name || "",
                        lastName: data.last_name || "",
                        email: data.email || "",
                        telephone: data.telephone || "",
                        class: data.class || "",
                        subjects: data.subjects || "",
                        link: data.link || "",
                        description: data.description || "",
                    });
                } else {
                    alert("Job not found!");
                }
            } catch (error) {
                console.error("Error fetching job data:", error);
                alert("Failed to load job data");
            }
        };

        fetchJobData();
    }, [params.id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    
  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({ ...prevData, class: value }));
  };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/jobs", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit the form");
            }

            toast.success("Data updated successfully.");

            setTimeout(() => {
                window.open("/dashboard/jobs", "_self");
            }, 2500);
        } catch (error) {
            console.error(error);
            toast.error("There is an error. Please try again.");
        }
    };

    return (
        <div>
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
                            <Label htmlFor="class">Class</Label>
                            <Select onValueChange={handleSelectChange} defaultValue={formData.class} >
                                <SelectTrigger>
                                    <SelectValue placeholder={formData.class} />
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
            <ToastContainer />
        </div>
    );
}