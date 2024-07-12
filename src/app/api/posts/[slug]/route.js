import { NextResponse } from "next/server";
import prisma from "../../../../utils/connect";

// GET SINGLE POST
export const GET = async (req, { params }) => {
  const { slug } = params;

  console.log("Slug:", slug); // Check the value of slug

  try {
    const post = await prisma.post.findUnique({
      where: { catSlug: slug },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ message: "Error in API/POSTS" }), {
      status: 500,
    });
  }
};
