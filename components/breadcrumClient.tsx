"use client";

import React, { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home, ChevronRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BreadcrumbItemType {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

interface BreadcrumbProps {
  customItems?: BreadcrumbItemType[]; // Optional custom breadcrumb items
  className?: string; // Optional custom class for styling
  hideTimestamp?: boolean; // Optional flag to hide the timestamp
}

const BreadcrumbComponent = ({ customItems, className, hideTimestamp }: BreadcrumbProps) => {
  const router = useRouter();
  const pathname = usePathname();

  // Generate dynamic breadcrumb items based on pathname and custom props
  const breadcrumbItems = useMemo(() => {
    const items: BreadcrumbItemType[] = [
      { label: "Home", href: "/", isCurrent: false },
      { label: "Cars", href: "/cars", isCurrent: false },
      { label: "Car Details", isCurrent: true },
        //reservation
        { label: "Reservation", href: "/reservation", isCurrent: true },
        //saved-cars
        { label: "Saved Cars", href: "/saved-cars", isCurrent: true },
    ];

    // Use custom items if provided, otherwise generate from pathname
    if (customItems && customItems.length > 0) {
      return [
        ...items,
        ...customItems.map((item) => ({
          ...item,
          isCurrent: item.isCurrent || false,
        })),
      ];
    }

    const segments = pathname.split("/").filter((segment) => segment);
    segments.forEach((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`;
      const isLast = index === segments.length - 1;
      let label = segment.charAt(0).toUpperCase() + segment.slice(1).replace("-", " ");

      // Customize labels based on common patterns (can be extended)
      if (segment === "cars") {
        label = "Cars";
      } else if (segment === "about") {
        label = "About Us";
      } else if (segment === "contact") {
        label = "Contact";
      } else if (/^\d+$/.test(segment)) {
        label = "Details"; // Generic for ID-based pages
      }

      items.push({
        href: isLast ? undefined : href,
        label,
        isCurrent: isLast,
      });
    });

    return items;
  }, [pathname, customItems]);

  // Handle navigation
  const handleNavigate = (href: string) => {
    router.push(href);
  };

  return (
    <div
      className={`container mx-auto px-4 py-4 bg-white shadow-sm rounded-lg ${className}`}
    >
      <div className="flex justify-between items-center">
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="text-sm">
          <BreadcrumbList>
            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </BreadcrumbSeparator>
                )}
                <BreadcrumbItem>
                  {item.href ? (
                    <BreadcrumbLink
                      href={item.href}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                      onClick={(e:any) => {
                        e.preventDefault();
                        handleNavigate(item.href!);
                      }}
                    >
                      {item.label}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className="text-gray-900 font-medium">
                      {item.label}
                    </BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        {/* Timestamp (optional) */}
        {!hideTimestamp && (
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>Last updated: 05:12 PM +07, Oct 17, 2025</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BreadcrumbComponent;