import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export function RecentActivity() {
  return (
    <div className="space-y-8 mt-4">
      {recentTeachers.map((teacher) => (
        <div key={teacher.name} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={teacher.avatar} alt={teacher.name} />
            <AvatarFallback>{teacher.name[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{teacher.name}</p>
            <p className="text-sm text-muted-foreground">
              {teacher.email}
            </p>
          </div>
          <div className="ml-auto font-medium">+${teacher.salary}</div>
        </div>
      ))}
    </div>
  );
}

const recentTeachers = [
  {
    name: "Pak Dahlan",
    email: "dahlan@email.com",
    salary: "1,999.00",
    avatar: "/avatars/01.png",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    salary: "2,500.00",
    avatar: "/avatars/02.png",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    salary: "3,000.00",
    avatar: "/avatars/03.png",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    salary: "1,800.00",
    avatar: "/avatars/04.png",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    salary: "2,200.00",
    avatar: "/avatars/05.png",
  },
];
