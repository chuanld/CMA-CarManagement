"use client";

import React, { useMemo } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight, Clock } from "lucide-react";
import { useSmoothRouter } from "@/app/hooks/use-smooth-router";

interface BreadcrumbItemType {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

interface BreadcrumbProps {
  customItems?: BreadcrumbItemType[];
  className?: string;
  hideTimestamp?: boolean;
}

const BreadcrumbComponent = ({
  customItems,
  className,
  hideTimestamp,
}: BreadcrumbProps) => {
  const { id } = useParams();

  const router = useRouter();
  const { smoothPush } = useSmoothRouter();
  const pathname = usePathname();

  // Generate breadcrumb items
  const breadcrumbItems = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    const items: BreadcrumbItemType[] = [
      { label: "Home", href: "/", isCurrent: segments.length === 0 },

    ];

    segments.forEach((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`;
      const isLast = index === segments.length - 1;

      let label = segment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

      if (segment === "cars") label = "Cars";
      if (segment === "bookings") label = "Bookings";
      if (segment === "reservations") label = "Reservations";
      if (segment === "saved-cars") label = "Saved Cars";
      if (/^\d+$/.test(segment)) label = "Details";
      else if (segment.length === 36 && segment.includes("-")) label = "Details"; // UUID case

      items.push({ label, href: isLast ? undefined : href, isCurrent: isLast });
    });

    return customItems?.length ? customItems : items;
  }, [pathname, customItems]);

  // Handle navigation
  const handleNavigate = (href: string) => smoothPush(href);

  // Format timestamp
  const formatTimestamp = () => {
    const now = new Date();
    return now.toLocaleString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      day: "2-digit",
      month: "short",
      year: "numeric",
      timeZoneName: "short",
    });
  };

  return (
    <div
      className={`container mx-auto px-4 py-3 
        bg-card text-card-foreground 
        border border-border shadow-sm rounded-xl ${className}`}
    >
      <div className="flex justify-between items-center flex-wrap gap-2">
        {/* Breadcrumb Navigation */}
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </BreadcrumbSeparator>
                )}
                <BreadcrumbItem>
                  {item.href ? (
                    <BreadcrumbLink
                      href={item.href}
                      onClick={(e: any) => {
                        e.preventDefault();
                        handleNavigate(item.href!);
                      }}
                      className="text-accent2 hover:underline transition-colors"
                    >
                      {item.label}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className="font-medium text-primary-foreground">
                      {item.label}
                    </BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        {/* Timestamp */}
        {!hideTimestamp && (
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span>Last updated: {formatTimestamp()}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BreadcrumbComponent;
