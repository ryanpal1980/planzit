import { Button } from "@/components/ui/button";
import { Ban, Plus } from "lucide-react";
import Link from "next/link";

interface iAppProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export function EmptyState({
  buttonText,
  description,
  href,
  title,
}: iAppProps) {
  return (
    <div className="flex flex-col flex-1 h-full items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
      <div className="flex items-center justify-center size-20 rounded-full bg-primary/20">
        <Ban className="size-10 text-primary" />
      </div>

      <h2 className="mt-6 text-xl font-semibold">{title}</h2>
      <p className="mb-7 mt-2 text-base text-muted-foreground max-w-xs mx-auto">
        {description}
      </p>

      <Button asChild>
        <Link href={href}>
          <Plus className="mr-1 size-4" /> {buttonText}
        </Link>
      </Button>
    </div>
  );
}
