import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default function AboutTable() {
  return (
    <Table className="w-max m-auto">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Website</TableHead>
          <TableHead>Link</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Next.js</TableCell>
          <TableCell>
            <Link href="https://nextjs.org/">https://nextjs.org/</Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Next-Auth</TableCell>
          <TableCell>
            <Link href="https://next-auth.js.org/">
              https://next-auth.js.org/
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Tailwind CSS</TableCell>
          <TableCell>
            <Link href="https://tailwindcss.com/">
              https://tailwindcss.com/
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Shad.cn</TableCell>
          <TableCell>
            <Link href="https://ui.shadcn.com/">https://ui.shadcn.com/</Link>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
