import { authMiddleware } from "@clerk/nextjs";

const publicPaths = ["/"];

export default function handler(req, res, next) {
  if (publicPaths.includes(req.url)) {
    return next();
  }

  return authMiddleware()(req, res, next);
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/(api|trpc)(.*)"],
};
