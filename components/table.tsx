import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const submissions = [
  {
    nis: "2223020",
    kelas: "12",
    nama: "Rofi Dzaki A",
    pelajaran: "Matematika",
    waktu: "2024-11-22 10:00 AM",
  },
  {
    nis: "2223001",
    kelas: "12",
    nama: "Adli Fathi Rayhan",
    pelajaran: "SaaS",
    waktu: "2024-11-21 09:30 AM",
  },
  {
    nis: "2223001",
    kelas: "13",
    nama: "Wahyuda",
    pelajaran: "PaaS",
    waktu: "2024-11-20 08:45 AM",
  },
  {
    nis: "2223001",
    kelas: "10",
    nama: "Zio Alfionis",
    pelajaran: "B Indonesia",
    waktu: "2024-11-22 11:15 AM",
  },
  {
    nis: "2223001",
    kelas: "11",
    nama: "Berke",
    pelajaran: "Bahasa Inggris",
    waktu: "2024-11-21 02:00 PM",
  },{
    nis: "2223001",
    kelas: "11",
    nama: "Berke",
    pelajaran: "Bahasa Inggris",
    waktu: "2024-11-21 02:00 PM",
  },
];

export default function TableDemo() {
  return (
    <Table>
      <TableCaption>Data terbaru pengumpulan tugas siswa.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">NIS</TableHead>
          <TableHead>Kelas</TableHead>
          <TableHead>Nama</TableHead>
          <TableHead>Pelajaran</TableHead>
          <TableHead className="text-right">Waktu</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {submissions.map((submission) => (
          <TableRow key={submission.nis}>
            <TableCell className="font-medium">{submission.nis}</TableCell>
            <TableCell>{submission.kelas}</TableCell>
            <TableCell>{submission.nama}</TableCell>
            <TableCell>{submission.pelajaran}</TableCell>
            <TableCell className="text-right">{submission.waktu}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
