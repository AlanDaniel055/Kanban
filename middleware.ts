import { auth, clerkMiddleware } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

const isPublicRoute = (req: NextRequest) => ["/", "/sign-in", "/sign-up"].includes(req.nextUrl.pathname);

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const { userId, orgId } = await auth();

  // Si el usuario está autenticado y accede a una ruta pública, redirigir a selección de organización
  if (userId && isPublicRoute(req)) {
    let path = "/select-org";

    if (orgId) {
      path = `/organization/${orgId}`;
    }

    return NextResponse.redirect(new URL(path, req.url));
  }

  // Si el usuario no está autenticado y está en una ruta privada, redirigir a sign-in
  if (!userId && !isPublicRoute(req)) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Si el usuario está autenticado pero no tiene una organización, redirigir a selección de organización
  if (userId && req.nextUrl.pathname !== "/select-org" && !orgId) {
    return NextResponse.redirect(new URL("/select-org", req.url));
  }

  return NextResponse.next();
});

// Configuración del matcher para evitar afectar archivos estáticos y rutas internas de Next.js
export const config = {
  matcher: [
    '/((?!_next|.*\\.(?:css|js|json|jpg|jpeg|png|gif|svg|woff|woff2|ttf|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
