# Photonatka – Photography Portfolio & Admin Panel

Photonatka is a full‑stack photography platform built with Next.js, designed for professional photographers who need both a public portfolio and a private system for delivering photos to clients. The application includes a secure admin panel, public galleries, private password‑protected albums, and a scalable architecture for future features.

---------------------------------------------------------------------

## Overview

Photonatka consists of two main areas:

### Public Website
- Homepage with featured photos
- Public galleries (categories, albums, collections)
- Fast, optimized image loading
- SEO‑friendly routing
- Clean, minimalistic UI for showcasing photography

### Private Client Area
- Photographer can create private albums for clients
- Each album can be shared via a unique link
- Optional password protection
- Clients can securely view their photos
- Future‑ready for:
  - downloads
  - selecting favorites
  - commenting
  - watermarking

### Admin Panel
- Accessible only to the photographer (single admin account)
- Admin‑only registration (only one user can register)
- Credential‑based login (NextAuth)
- Session‑protected routes using server‑side layout guard
- Ability to manage:
  - public galleries
  - private client albums
  - uploaded photos
  - pricing pages
  - homepage content

---------------------------------------------------------------------

## Features

### Authentication
- Credential‑based login using NextAuth
- Admin‑only registration (blocked after first account)
- Secure session cookies
- Server‑side session validation
- Protected admin panel using layout guard (no duplication across pages)

### Galleries & Albums
- Public galleries visible to all visitors
- Private albums accessible only via:
  - unique share link
  - optional password
- Future support for:
  - expiring links
  - client download permissions
  - watermarking
  - album analytics

### Uploads
- UploadThing integration for image uploads
- Automatic file validation
- Ready for future:
  - resizing
  - compression
  - CDN delivery

### Database
- Prisma ORM
- PostgreSQL (Supabase)
- Models:
  - User (admin)
  - Gallery
  - Album
  - Photo
  - ClientAccess (for password‑protected albums)

---------------------------------------------------------------------

## Tech Stack

- Next.js 16 (App Router)
- React 18
- NextAuth (Credentials Provider)
- Prisma ORM
- PostgreSQL (Supabase)
- UploadThing
- TypeScript
- TailwindCSS

---------------------------------------------------------------------

## Project Structure

app/
  admin-panel/
    layout.tsx        # Global auth guard for all admin pages
    page.tsx          # Admin dashboard
    albums/
      page.tsx        # Example protected subpage
  galleries/
    page.tsx          # Public galleries
  album/
    [id]/
      page.tsx        # Public or private album view
  api/
    auth/
      [...nextauth]/  # NextAuth handlers
components/
  LoginForm/
  LogoutButton/
  GalleryGrid/
  AlbumViewer/
lib/
  db.ts               # Prisma client
prisma/
  schema.prisma

---------------------------------------------------------------------

## Authentication Flow

1. First user registers → becomes admin.
2. If admin exists → registration is blocked.
3. Admin logs in using credentials.
4. Session stored in secure cookies.
5. Admin panel is protected by a server‑side layout.
6. All subpages under /admin-panel/* inherit protection automatically.

---------------------------------------------------------------------

## Private Album Flow

1. Admin creates an album for a client.
2. System generates a unique share link, for example:
   /album/abc123
3. Admin can optionally set a password.
4. Client opens the link:
   - If album is public → sees photos immediately.
   - If album is protected → must enter password.
5. Client views photos in a clean, responsive layout.

---------------------------------------------------------------------

## License

This project is private and not intended for public distribution.
