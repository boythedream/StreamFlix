"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./utlis/db";
import { getServerSession } from "next-auth";
import { authOptions } from "./utlis/auth";

export async function addToWatchList(formData: FormData): Promise<void> {
  const movieId = formData.get("movieId");
  const pathname = formData.get("pathname");

  // Get the current user's session
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    // Return early if not authenticated
    return;
  }

  // Get the user ID from the database based on email
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    select: {
      id: true,
    },
  });

  if (!user) {
    // Return early if user not found
    return;
  }

  // Create the watchlist entry with the real user ID
  await prisma.watchList.create({
    data: {
      userId: user.id,
      movieId: Number(movieId),
    },
  });

  revalidatePath(pathname as string);
}

export async function removeFromWatchList(formData: FormData): Promise<void> {
  const watchListId = formData.get("watchListId") as string;
  const pathname = formData.get("pathname") as string;

  const session = await getServerSession(authOptions);

  if (!session) {
    // Return early if not authenticated
    return;
  }

  // Remove the watchlist item
  await prisma.watchList.delete({
    where: {
      id: watchListId,
    },
  });

  // Revalidate the path to refresh the UI
  revalidatePath(pathname);
}
