import { NextResponse, NextRequest } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
    const title = req.nextUrl.searchParams.get("article_title");
    if(title==="") {
        return NextResponse.json([])
    }
    try {
        const result = await prisma.blog.findMany({
            where: {
                article_title: {
                    contains: title,
                    mode: 'insensitive'
                },
            },
            select: {
                article_title: true,
                article_id: true
            }
        });
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json("fail", { status: 500 });
    }
}
