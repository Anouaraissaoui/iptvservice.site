import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItem {
  name: string;
  path: string;
}

const getBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [{ name: 'Home', path: '/' }];
  
  let currentPath = '';
  paths.forEach(path => {
    currentPath += `/${path}`;
    const name = path.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    breadcrumbs.push({ name, path: currentPath });
  });
  
  return breadcrumbs;
};

export function Breadcrumbs() {
  const location = useLocation();
  const breadcrumbs = getBreadcrumbs(location.pathname);
  const isLastItem = (index: number) => index === breadcrumbs.length - 1;

  // Don't show breadcrumbs on homepage
  if (location.pathname === '/') return null;

  return (
    <Breadcrumb className="px-4 py-2 bg-navy-light/50 backdrop-blur-sm border-b border-white/10">
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <BreadcrumbItem key={breadcrumb.path}>
            {!isLastItem(index) ? (
              <>
                <BreadcrumbLink asChild>
                  <Link 
                    to={breadcrumb.path}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {breadcrumb.name}
                  </Link>
                </BreadcrumbLink>
                <BreadcrumbSeparator className="text-gray-600" />
              </>
            ) : (
              <BreadcrumbPage className="text-white">
                {breadcrumb.name}
              </BreadcrumbPage>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}