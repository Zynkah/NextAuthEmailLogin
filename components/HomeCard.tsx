import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function HomeCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Next Auth Login Example</CardTitle>
        <CardDescription>Resources and build of a next auth application</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Using next.js, next-auth, tailwind, and shad.cn I built this sample application. I did this to learn more about these libraries and frameworks. This sample code can be used to reference how to build certain components, APIs and more.</p>
      </CardContent>
      <CardFooter>
        <p>Thank you to the developers who got me this far and have provided the resources for me to build this.</p>
      </CardFooter>
    </Card>
  );
}
