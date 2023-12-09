import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const data = await prisma.tempatSampah.findFirst({
      where:
        { id: parseInt(id) },
    });
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const payload = await req.json();
    const data = await prisma.tempatSampah.update({
      where:
        { id: parseInt(id) },
      data: payload,
    });
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params

    const data = await prisma.tempatSampah.delete({
      where:
        { id: parseInt(id) },
    });
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}