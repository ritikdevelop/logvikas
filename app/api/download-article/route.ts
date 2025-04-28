import { type NextRequest, NextResponse } from "next/server"
import { getArticleById } from "@/lib/data"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const id = searchParams.get("id")

  if (!id) {
    return new NextResponse(JSON.stringify({ error: "Article ID is required" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  const article = getArticleById(id)

  if (!article) {
    return new NextResponse(JSON.stringify({ error: "Article not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  // Return the article as a downloadable JSON file
  return new NextResponse(JSON.stringify(article, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": `attachment; filename="article-${id}-${article.title.toLowerCase().replace(/\s+/g, "-")}.json"`,
    },
  })
}
