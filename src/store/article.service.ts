"use server";

import { Article } from "@prisma/client";
import { prisma } from "../../prisma/prisma";
import { auth } from "../../auth";

export const getAllArticles = async ({
  search,
}: {
  search?: string | null;
}) => {
  try {
    const articles = await prisma.article.findMany({
      ...(search && {
        where: {
          OR: [
            { title: { contains: search } },
            { content: { contains: search } },
            { description: { contains: search } },
            { category: { contains: search } },
            {
              user: {
                name: { contains: search },
              },
            },
          ],
        },
      }),
      include: {
        user: {
          select: {
            id: true,
            name: true,
            lastName: true,
            imageUrl: true,
          },
        },
      },
    });

    return articles;
  } catch (error) {
    console.log(error);
  }
};

export const getAllArticlesById = async ({
  userId,
  search,
}: {
  userId: string;
  search?: string | null;
}) => {
  try {
    const articles = await prisma.article.findMany({
      where: {
        userId: userId,
        ...(search && {
          AND: [
            {
              OR: [
                { title: { contains: search } },
                { content: { contains: search } },
                { description: { contains: search } },
                { category: { contains: search } },
                {
                  user: {
                    name: { contains: search },
                  },
                },
              ],
            },
          ],
        }),
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            lastName: true,
            imageUrl: true,
          },
        },
      },
    });

    return articles;
  } catch (error) {
    console.log(error);
  }
};

export const createArticle = async (values: Partial<Article>) => {
  const session = await auth();

  if (!session?.user) {
    return;
  }

  const createValues = { ...values, userId: session?.user.id };

  try {
    const article = await prisma.article.create({
      data: createValues,
    });

    return article;
  } catch (error) {
    console.log(error);
  }
};
