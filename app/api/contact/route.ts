import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request?.json?.();
    const { name, email, phone, subject, message } = body ?? {};

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Bitte fülle alle Pflichtfelder aus" },
        { status: 400 }
      );
    }

    // Save to database
    const submission = await prisma?.contactSubmission?.create?.({
      data: {
        name: name ?? "",
        email: email ?? "",
        phone: phone ?? "",
        subject: subject ?? "",
        message: message ?? "",
        formType: "contact",
        status: "new"
      }
    });

    return NextResponse.json(
      { 
        success: true, 
        message: "Nachricht erfolgreich gesendet",
        id: submission?.id ?? ""
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving contact submission:", error);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuche es erneut." },
      { status: 500 }
    );
  }
}
