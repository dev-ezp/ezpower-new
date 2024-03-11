import { NextRequest , NextResponse } from 'next/server'

import nodemailer from 'nodemailer'

import ValidateFields from '@/helpers/validate-fields'

export async function POST ( req: NextRequest ) {

    try {

        switch ( req.method ) {

            default:
            return new Response( 'Cannot GET /' , { status: 404 } )

            case 'POST':

            const { serial } = Object.fromEntries( req.nextUrl.searchParams )
            const header = req.headers.get( 'x-access-authentication' )

            if ( serial === header ) {

                const data = await req.json()
                const validateFields = new ValidateFields( data )

                if ( validateFields.passAll() ) {

                    /**
                     * To help keep your account secure, starting May 30, 2022, ​​Google will no longer support 
                     * the use of third-party apps or devices which ask you to sign in to your Google Account 
                     * using only your username and password.
                     *
                     * Please note this deadline does not apply to Google Workspace or Google Cloud Identity 
                     * customers. The enforcement date for these customers will be announced on the Workspace 
                     * blog at a later date.
                     *
                     * For more information, please continue reading.
                     *  
                     * Special Note on Apple Device Sign-Ins. Users who have not recently signed into their 
                     * Google Account using only username and password will be able to only make new sign 
                     * in attempts using the Google account type starting from February 28, 2022. Existing 
                     * users may continue to sign into their Google Account using their username and password 
                     * until May 30, 2022.
                     * 
                     * setup "app password" to your gmail account in the settings/security/password 
                     */

                    let transporter = nodemailer.createTransport( {
                        host: 'smtp.gmail.com',
                        secure: true,
                        port: 465,
                        auth: {
                            user: process.env.SYSTEM_MAILER,
                            pass: process.env.MAILER_PASSWORD
                        }
                    } )

                    await transporter.sendMail( {
                        to: 'info@ezpower.tech',
                        subject: 'message from client',
                        html: `<!doctype html>
                                <html ⚡4email>
                                    <head>
                                        <meta charset="utf-8">
                                        <style amp4email-boilerplate>
                                            
                                        </style>
                                        <script async src="https://cdn.ampproject.org/v0.js"></script>
                                        <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
                                    </head>
                                    <body>
                                        <h1>Request Qoute for:</h1>
                                        <h4>name: ${ data.name }</h4>
                                        <h4>email: ${ data.email }</h4>
                                        <h4>phone: ${ data.phone }</h4>
                                        <p>address: ${ data.address }</p>
                                        <p>field a: ${ data.fieldA }</p>
                                        <p>field b: ${ data.fieldB }</p>
                                        <p>field c: ${ data.fieldC }</p>
                                        <p>field d: ${ data.fieldD }</p>
                                        <p>method of communication: ${ data.prefered === 'all' ? 'email & phone' : data.prefered }</p>
                                    </body>
                                </html>`
                    } )

                }

                return NextResponse.json( {
                    pass: validateFields.passAll(),
                    obj: {
                        name: validateFields.checkName(),
                        email: validateFields.checkEmail(),
                        phone: validateFields.checkPhone(),
                        address: validateFields.checkAddress(),
                        fieldA: validateFields.checkFieldA(),
                        fieldB: validateFields.checkFieldB(),
                        fieldC: validateFields.checkFieldC(),
                        fieldD: validateFields.checkFieldD()
                    }
                } )

            } else {
                return new Response( 'Method Not Allowed' , { status: 405 } )
            }
            
        }

    } catch ( err ) {

        if ( err ) {
            console.error( err )
            return new Response( 'Internal Server Error' , { status: 500 } )
        }

    }

}   