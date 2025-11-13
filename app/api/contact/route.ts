import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, message } = body;

        const formData = new URLSearchParams();
        formData.append('entry.588724479', firstName);
        formData.append('entry.761798039', lastName);
        formData.append('entry.1250516157', email);
        formData.append('entry.451786105', message);

        const response = await fetch(
            'https://docs.google.com/forms/d/e/1FAIpQLSdFGczUgW-9DdjI3QQKPgIPzDKx4jWUhEhBDHg5zo08JFZxhg/formResponse',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData.toString(),
            }
        );

        // Google Forms retourne toujours 200 même en mode no-cors
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error submitting form:', error);
        return NextResponse.json(
            { error: 'Failed to submit form' },
            { status: 500 }
        );
    }
}