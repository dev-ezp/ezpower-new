import validator from 'validator'

interface Obj {
    name: string | undefined | null | void,
    email: string | undefined | null | void,
    phone: string | undefined | null | void,
    address: string | undefined | null | void,
    fieldA: string | undefined | null | void,
    fieldB: string | undefined | null | void,
    fieldC: string | undefined | null | void,
    fieldD: string | undefined | null | void
}
interface Ret { pass: boolean , msg: string , code: number }

class ValidateFields {

    private name: string
    private email: string
    private phone: string
    private address: string
    private fieldA: string
    private fieldB: string
    private fieldC: string
    private fieldD: string

    constructor ( obj: Obj ) {

        const { name , email , phone , address , fieldA , fieldB , fieldC , fieldD } = obj

        this.name = name === undefined || name === null ? '' : name
        this.email = email === undefined || email === null ? '' : email
        this.phone = phone === undefined || phone === null ? '' : phone
        this.address = address === undefined || address === null ? '' : address
        this.fieldA = fieldA === undefined || fieldA === null ? '' : fieldA
        this.fieldB = fieldB === undefined || fieldB === null ? '' : fieldB
        this.fieldC = fieldC === undefined || fieldC === null ? '' : fieldC
        this.fieldD = fieldD === undefined || fieldD === null ? '' : fieldD

    }

    checkName (): Ret {

        if ( this.name === '' ) {

            return {
                pass: false,
                msg: '* name field is empty.',
                code: 2
            }

        } else {

            const sanitized_name = validator.isAlpha( String( this.name ) , 'en-US' , { ignore: ' .' } )

            if ( sanitized_name ) {

                return {
                    pass: true,
                    msg: '',
                    code: 1
                }

            }

            return {
                pass: false,
                msg: '* your name cannot contain numbers and special characters.',
                code: 0
            }

        }

    }

    checkEmail (): Ret {

        if ( this.email === '' ) {
            
            return {
                pass: false,
                msg: '* email is empty.',
                code: 2
            }
        
        } else {

            const sanitized_email = validator.isEmail( String( this.email ) )

            if ( sanitized_email ) {

                return {
                    pass: true,
                    msg: '',
                    code: 1
                }

            } 

            return {
                pass: false,
                msg: '* invalid email.',
                code: 0
            }

        }

    }

    checkPhone (): Ret {

        if ( this.phone === '' ) {

            return {
                pass: false,
                msg: '* phone no. is empty.',
                code: 2
            }

        } else {

            const sanitized_phone = validator.isNumeric( String( this.phone ) , { no_symbols: true } )
            // list of philippine valid phone and phone networks.
            const check_network_code = /^0895|0896|0897|0898|0991|0992|0993|0994|0908|0918|0919|0920|0921|0928|0929|0939|0946|0947|0949|0951|0961|0998|0999|0907|0909|0910|0912|0930|0938|0946|0948|0950|0922|0923|0924|0925|0931|0932|0933|0934|0940|0941|0942|0943|0973|0974|0817|09173|09175|09176|09178|09253|09255|09256|09257|09258|0905|0906|0915|0916|0917|0926|0927|0935|0936|0937|0945|0953|0954|0955|0956|0965|0966|0967|0975|0976|0977|0978|0979|0995|0996|0997/gm.test( String( this.phone ) )

            if ( sanitized_phone && check_network_code && this.phone.length === 11 ) {

                return {
                    pass: true,
                    msg: '',
                    code: 1
                }

            } 

            return {
                pass: false,
                msg: '* invalid phone no.',
                code: 0
            }

        }

    }

    checkAddress (): Ret {

        if ( this.address === '' ) {

            return {
                pass: false,
                msg: '* address is empty.',
                code: 2
            }

        } else {

            const sanitized_address = validator.isAlphanumeric( String( this.address ) , 'en-US' , { ignore: ' ,.-#' } )

            if ( sanitized_address ) {

                return {
                    pass: true,
                    msg: '',
                    code: 1
                }

            }

            return {
                pass: false,
                msg: '* your address cannot contain special characters except ,.-#',
                code: 0
            }

        }

    }

    checkFieldA (): Ret {

        if ( this.fieldA === '' ) {

            return {
                pass: false,
                msg: '* field a empty.',
                code: 2
            }

        } else {

            const sanitized_fieldA = validator.isAlphanumeric( String( this.fieldA ) , 'en-US' , { ignore: ' ,.-#' } )

            if ( sanitized_fieldA ) {

                return {
                    pass: true,
                    msg: '',
                    code: 1
                }

            }

            return {
                pass: false,
                msg: '* field a cannot contain special characters except ,.-#',
                code: 0
            }

        }

    }

    checkFieldB (): Ret {

        if ( this.fieldB === '' ) {

            return {
                pass: false,
                msg: '* field b empty.',
                code: 2
            }

        } else {

            const sanitized_fieldB = validator.isAlphanumeric( String( this.fieldB ) , 'en-US' , { ignore: ' ,.-#' } )

            if ( sanitized_fieldB ) {

                return {
                    pass: true,
                    msg: '',
                    code: 1
                }

            }

            return {
                pass: false,
                msg: '* field b cannot contain special characters except ,.-#',
                code: 0
            }

        }

    }

    checkFieldC (): Ret {

        if ( this.fieldC === '' ) {

            return {
                pass: false,
                msg: '* field c empty.',
                code: 2
            }

        } else {

            const sanitized_fieldC = validator.isAlphanumeric( String( this.fieldC ) , 'en-US' , { ignore: ' ,.-#' } )

            if ( sanitized_fieldC ) {

                return {
                    pass: true,
                    msg: '',
                    code: 1
                }

            }

            return {
                pass: false,
                msg: '* field c cannot contain special characters except ,.-#',
                code: 0
            }

        }

    }

    checkFieldD (): Ret {

        if ( this.fieldD === '' ) {

            return {
                pass: false,
                msg: '* field d empty.',
                code: 2
            }

        } else {

            const sanitized_fieldD = validator.isAlphanumeric( String( this.fieldD ) , 'en-US' , { ignore: ' ,.-#' } )

            if ( sanitized_fieldD ) {

                return {
                    pass: true,
                    msg: '',
                    code: 1
                }

            }

            return {
                pass: false,
                msg: '* field d cannot contain special characters except ,.-#',
                code: 0
            }

        }

    }

    passAll (): boolean {

        if ( this.checkName().pass && this.checkEmail().pass && this.checkPhone().pass && this.checkAddress().pass && this.checkFieldA().pass && this.checkFieldB().pass && this.checkFieldC().pass && this.checkFieldD().pass ) {

            return true

        }

        return false

    }

}

export default ValidateFields
