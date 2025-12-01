import { NextRequest, NextResponse } from "next/server";

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

    // TODO: Database connection not configured yet
    // Temporarily return success without saving to database
    console.log("Contact form submission (not saved):", { name, email, subject });

    return NextResponse.json(
      { 
        success: true, 
        message: "Nachricht erfolgreich gesendet (wird derzeit nicht gespeichert)",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact submission:", error);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuche es erneut." },
      { status: 500 }
    );
  }
}