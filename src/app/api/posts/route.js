import { NextResponse } from "next/server";
import prisma from "../../../utils/connect";

export const GET = async (req) => {
  const Post_Per_Page = 2;
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page"));
  const category = searchParams.get("category");

  const query = {
    take: Post_Per_Page,
    skip: Post_Per_Page * (page - 1),
    where: {
      ...(category && { catSlug: category }),
    },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);

    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "sth went wrong inside posts" }),
      { status: 500 }
    );
  }
};
