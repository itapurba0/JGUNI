import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = body;
        if (!name || !email || !message) {
            return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
        }

        const dataDir = path.join(process.cwd(), 'data');
        const file = path.join(dataDir, 'messages.json');
        let arr: any[] = [];
        if (fs.existsSync(file)) {
            const raw = fs.readFileSync(file, 'utf-8');
            arr = raw ? JSON.parse(raw) : [];
        }

        arr.push({ name, email, message, createdAt: new Date().toISOString() });
        fs.writeFileSync(file, JSON.stringify(arr, null, 2), 'utf-8');

        return NextResponse.json({ ok: true });
    } catch (err: any) {
        return NextResponse.json({ ok: false, error: err.message || String(err) }, { status: 500 });
    }
}
