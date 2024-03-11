import Random from './random'

type Version = '1' | '2'

class Cipher {

    private version: Version

    constructor ( opt: { version: Version } = { version: '1' } ) {

        this.version = opt.version

    }

    hash ( password: string ): string {

        if ( password !== undefined ) {

            switch( this.version ) {

                default:
                return password
    
                case '1':
                const v1: Function = ( password: string ): string => {
                    
                    const random = new Random()

                    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890'
                    const rearr = random.array( chars.split( '' ) )
                    const shift = password.length
            
                    const keys = rearr.join( '' )
            
                    const cipher = `${ keys.substring( shift , keys.length ) }${ keys.substring( 0 , shift ) }`
            
                    const startKey = keys.substring( 0 , keys.length / 2 )
                    const endKey = keys.substring( keys.length / 2 , keys.length )
            
                    const pKeys = keys.split( '' )
                    const pCipher = cipher.split( '' )
                    
                    const encrypt = password.split( '' ).map( ( chr , ind ) => {
                        let b: number = 0
                        let e: number = ind + 1
                        let pl: string[] = []
                        switch( chr.substring( b , e ) ) {
                            case pKeys[ 0 ]:    pl[ b ] = pCipher[ 0 ]
                                                break
                            case pKeys[ 1 ]:    pl[ b ] = pCipher[ 1 ]
                                                break
                            case pKeys[ 2 ]:    pl[ b ] = pCipher[ 2 ]
                                                break
                            case pKeys[ 3 ]:    pl[ b ] = pCipher[ 3 ]
                                                break
                            case pKeys[ 4 ]:    pl[ b ] = pCipher[ 4 ]
                                                break
                            case pKeys[ 5 ]:    pl[ b ] = pCipher[ 5 ]
                                                break
                            case pKeys[ 6 ]:    pl[ b ] = pCipher[ 6 ]
                                                break
                            case pKeys[ 7 ]:    pl[ b ] = pCipher[ 7 ]
                                                break
                            case pKeys[ 8 ]:    pl[ b ] = pCipher[ 8 ]
                                                break
                            case pKeys[ 9 ]:    pl[ b ] = pCipher[ 9 ]
                                                break
                            case pKeys[ 10 ]:   pl[ b ] = pCipher[ 10 ]
                                                break
                            case pKeys[ 11 ]:   pl[ b ] = pCipher[ 11 ]
                                                break
                            case pKeys[ 12 ]:   pl[ b ] = pCipher[ 12 ]
                                                break
                            case pKeys[ 13 ]:   pl[ b ] = pCipher[ 13 ]
                                                break
                            case pKeys[ 14 ]:   pl[ b ] = pCipher[ 14 ]
                                                break
                            case pKeys[ 15 ]:   pl[ b ] = pCipher[ 15 ]
                                                break
                            case pKeys[ 16 ]:   pl[ b ] = pCipher[ 16 ]
                                                break
                            case pKeys[ 17 ]:   pl[ b ] = pCipher[ 17 ]
                                                break
                            case pKeys[ 18 ]:   pl[ b ] = pCipher[ 18 ]
                                                break
                            case pKeys[ 19 ]:   pl[ b ] = pCipher[ 19 ]
                                                break
                            case pKeys[ 20 ]:   pl[ b ] = pCipher[ 20 ]
                                                break
                            case pKeys[ 21 ]:   pl[ b ] = pCipher[ 21 ]
                                                break
                            case pKeys[ 22 ]:   pl[ b ] = pCipher[ 22 ]
                                                break
                            case pKeys[ 23 ]:   pl[ b ] = pCipher[ 23 ]
                                                break
                            case pKeys[ 24 ]:   pl[ b ] = pCipher[ 24 ]
                                                break
                            case pKeys[ 25 ]:   pl[ b ] = pCipher[ 25 ]
                                                break
                            case pKeys[ 26 ]:   pl[ b ] = pCipher[ 26 ]
                                                break
                            case pKeys[ 27 ]:   pl[ b ] = pCipher[ 27 ]
                                                break
                            case pKeys[ 28 ]:   pl[ b ] = pCipher[ 28 ]
                                                break
                            case pKeys[ 29 ]:   pl[ b ] = pCipher[ 29 ]
                                                break
                            case pKeys[ 30 ]:   pl[ b ] = pCipher[ 30 ]
                                                break
                            case pKeys[ 31 ]:   pl[ b ] = pCipher[ 31 ]
                                                break
                            case pKeys[ 32 ]:   pl[ b ] = pCipher[ 32 ]
                                                break
                            case pKeys[ 33 ]:   pl[ b ] = pCipher[ 33 ]
                                                break
                            case pKeys[ 34 ]:   pl[ b ] = pCipher[ 34 ]
                                                break
                            case pKeys[ 35 ]:   pl[ b ] = pCipher[ 35 ]
                                                break
                        }

                        b++
                        e++

                        return pl.join( '' )

                    } )
                    
                    const hash = `${ startKey }${ encrypt.join( '' ) }${ endKey }`
            
                    return hash

                }
                return v1( password )
    
                case '2':
                const v2: Function = ( password: string ): string => {
                    
                    const random = new Random()

                    // excluded characters: ' , . \ : " ` ; and white spaces.
                    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*()_+{}|<>?-=[]/'
                    const rearr = random.array( chars.split( '' ) )
                    const shift = password.length
            
                    const keys = rearr.join( '' )
            
                    const cipher = `${ keys.substring( shift , keys.length ) }${ keys.substring( 0 , shift ) }`
            
                    const startKey = keys.substring( 0 , keys.length / 2 )
                    const endKey = keys.substring( keys.length / 2 , keys.length )
            
                    const pKeys = keys.split( '' )
                    const pCipher = cipher.split( '' )
                    
                    const encrypt = password.split( '' ).map( ( chr , ind ) => {
                        let b: number = 0
                        let e: number = ind + 1
                        let pl: string[] = []
                        switch( chr.substring( b , e ) ) {
                            case pKeys[ 0 ]:    pl[ b ] = pCipher[ 0 ]
                                                break
                            case pKeys[ 1 ]:    pl[ b ] = pCipher[ 1 ]
                                                break
                            case pKeys[ 2 ]:    pl[ b ] = pCipher[ 2 ]
                                                break
                            case pKeys[ 3 ]:    pl[ b ] = pCipher[ 3 ]
                                                break
                            case pKeys[ 4 ]:    pl[ b ] = pCipher[ 4 ]
                                                break
                            case pKeys[ 5 ]:    pl[ b ] = pCipher[ 5 ]
                                                break
                            case pKeys[ 6 ]:    pl[ b ] = pCipher[ 6 ]
                                                break
                            case pKeys[ 7 ]:    pl[ b ] = pCipher[ 7 ]
                                                break
                            case pKeys[ 8 ]:    pl[ b ] = pCipher[ 8 ]
                                                break
                            case pKeys[ 9 ]:    pl[ b ] = pCipher[ 9 ]
                                                break
                            case pKeys[ 10 ]:   pl[ b ] = pCipher[ 10 ]
                                                break
                            case pKeys[ 11 ]:   pl[ b ] = pCipher[ 11 ]
                                                break
                            case pKeys[ 12 ]:   pl[ b ] = pCipher[ 12 ]
                                                break
                            case pKeys[ 13 ]:   pl[ b ] = pCipher[ 13 ]
                                                break
                            case pKeys[ 14 ]:   pl[ b ] = pCipher[ 14 ]
                                                break
                            case pKeys[ 15 ]:   pl[ b ] = pCipher[ 15 ]
                                                break
                            case pKeys[ 16 ]:   pl[ b ] = pCipher[ 16 ]
                                                break
                            case pKeys[ 17 ]:   pl[ b ] = pCipher[ 17 ]
                                                break
                            case pKeys[ 18 ]:   pl[ b ] = pCipher[ 18 ]
                                                break
                            case pKeys[ 19 ]:   pl[ b ] = pCipher[ 19 ]
                                                break
                            case pKeys[ 20 ]:   pl[ b ] = pCipher[ 20 ]
                                                break
                            case pKeys[ 21 ]:   pl[ b ] = pCipher[ 21 ]
                                                break
                            case pKeys[ 22 ]:   pl[ b ] = pCipher[ 22 ]
                                                break
                            case pKeys[ 23 ]:   pl[ b ] = pCipher[ 23 ]
                                                break
                            case pKeys[ 24 ]:   pl[ b ] = pCipher[ 24 ]
                                                break
                            case pKeys[ 25 ]:   pl[ b ] = pCipher[ 25 ]
                                                break
                            case pKeys[ 26 ]:   pl[ b ] = pCipher[ 26 ]
                                                break
                            case pKeys[ 27 ]:   pl[ b ] = pCipher[ 27 ]
                                                break
                            case pKeys[ 28 ]:   pl[ b ] = pCipher[ 28 ]
                                                break
                            case pKeys[ 29 ]:   pl[ b ] = pCipher[ 29 ]
                                                break
                            case pKeys[ 30 ]:   pl[ b ] = pCipher[ 30 ]
                                                break
                            case pKeys[ 31 ]:   pl[ b ] = pCipher[ 31 ]
                                                break
                            case pKeys[ 32 ]:   pl[ b ] = pCipher[ 32 ]
                                                break
                            case pKeys[ 33 ]:   pl[ b ] = pCipher[ 33 ]
                                                break
                            case pKeys[ 34 ]:   pl[ b ] = pCipher[ 34 ]
                                                break
                            case pKeys[ 35 ]:   pl[ b ] = pCipher[ 35 ]
                                                break
                            case pKeys[ 36 ]:   pl[ b ] = pCipher[ 36 ]
                                                break
                            case pKeys[ 37 ]:   pl[ b ] = pCipher[ 37 ]
                                                break
                            case pKeys[ 38 ]:   pl[ b ] = pCipher[ 38 ]
                                                break
                            case pKeys[ 39 ]:   pl[ b ] = pCipher[ 39 ]
                                                break
                            case pKeys[ 40 ]:   pl[ b ] = pCipher[ 40 ]
                                                break
                            case pKeys[ 41 ]:   pl[ b ] = pCipher[ 41 ]
                                                break
                            case pKeys[ 42 ]:   pl[ b ] = pCipher[ 42 ]
                                                break
                            case pKeys[ 43 ]:   pl[ b ] = pCipher[ 43 ]
                                                break
                            case pKeys[ 44 ]:   pl[ b ] = pCipher[ 44 ]
                                                break
                            case pKeys[ 45 ]:   pl[ b ] = pCipher[ 45 ]
                                                break
                            case pKeys[ 46 ]:   pl[ b ] = pCipher[ 46 ]
                                                break
                            case pKeys[ 47 ]:   pl[ b ] = pCipher[ 47 ]
                                                break
                            case pKeys[ 48 ]:   pl[ b ] = pCipher[ 48 ]
                                                break
                            case pKeys[ 49 ]:   pl[ b ] = pCipher[ 49 ]
                                                break
                            case pKeys[ 50 ]:   pl[ b ] = pCipher[ 50 ]
                                                break
                            case pKeys[ 51 ]:   pl[ b ] = pCipher[ 51 ]
                                                break
                            case pKeys[ 52 ]:   pl[ b ] = pCipher[ 52 ]
                                                break
                            case pKeys[ 53 ]:   pl[ b ] = pCipher[ 53 ]
                                                break
                            case pKeys[ 54 ]:   pl[ b ] = pCipher[ 54 ]
                                                break
                            case pKeys[ 55 ]:   pl[ b ] = pCipher[ 55 ]
                                                break
                            case pKeys[ 56 ]:   pl[ b ] = pCipher[ 56 ]
                                                break
                            case pKeys[ 57 ]:   pl[ b ] = pCipher[ 57 ]
                                                break
                            case pKeys[ 58 ]:   pl[ b ] = pCipher[ 58 ]
                                                break
                            case pKeys[ 59 ]:   pl[ b ] = pCipher[ 59 ]
                                                break
                            case pKeys[ 60 ]:   pl[ b ] = pCipher[ 60 ]
                                                break
                            case pKeys[ 61 ]:   pl[ b ] = pCipher[ 61 ]
                                                break
                            case pKeys[ 62 ]:   pl[ b ] = pCipher[ 62 ]
                                                break
                            case pKeys[ 63 ]:   pl[ b ] = pCipher[ 63 ]
                                                break
                            case pKeys[ 64 ]:   pl[ b ] = pCipher[ 64 ]
                                                break
                            case pKeys[ 65 ]:   pl[ b ] = pCipher[ 65 ]
                                                break
                            case pKeys[ 66 ]:   pl[ b ] = pCipher[ 66 ]
                                                break
                            case pKeys[ 67 ]:   pl[ b ] = pCipher[ 67 ]
                                                break
                            case pKeys[ 68 ]:   pl[ b ] = pCipher[ 68 ]
                                                break
                            case pKeys[ 69 ]:   pl[ b ] = pCipher[ 69 ]
                                                break
                            case pKeys[ 70 ]:   pl[ b ] = pCipher[ 70 ]
                                                break
                            case pKeys[ 71 ]:   pl[ b ] = pCipher[ 71 ]
                                                break
                            case pKeys[ 72 ]:   pl[ b ] = pCipher[ 72 ]
                                                break
                            case pKeys[ 73 ]:   pl[ b ] = pCipher[ 73 ]
                                                break
                            case pKeys[ 74 ]:   pl[ b ] = pCipher[ 74 ]
                                                break
                            case pKeys[ 75 ]:   pl[ b ] = pCipher[ 75 ]
                                                break
                            case pKeys[ 76 ]:   pl[ b ] = pCipher[ 76 ]
                                                break
                            case pKeys[ 77 ]:   pl[ b ] = pCipher[ 77 ]
                                                break
                            case pKeys[ 78 ]:   pl[ b ] = pCipher[ 78 ]
                                                break
                            case pKeys[ 79 ]:   pl[ b ] = pCipher[ 79 ]
                                                break
                            case pKeys[ 80 ]:   pl[ b ] = pCipher[ 80 ]
                                                break
                            case pKeys[ 81 ]:   pl[ b ] = pCipher[ 81 ]
                                                break
                            case pKeys[ 82 ]:   pl[ b ] = pCipher[ 82 ]
                                                break
                            case pKeys[ 83 ]:   pl[ b ] = pCipher[ 83 ]
                                                break
                            case pKeys[ 84 ]:   pl[ b ] = pCipher[ 84 ]
                                                break
                            case pKeys[ 85 ]:   pl[ b ] = pCipher[ 85 ]
                                                break
                        }

                        b++
                        e++

                        return pl.join( '' )

                    } )
                    
                    const hash = `${ startKey }${ encrypt.join( '' ) }${ endKey }`
            
                    return hash
                }
                return v2( password )
    
            }

        }

        return ''

    }

    dehash ( hash: string ): string {

        if ( hash !== undefined ) {

            switch ( this.version ) {

                default:
                return hash

                case '1':
                const v1: Function = ( hash: string ): string => {

                    const pHash = hash
                    const hash_length = 18
                    const keyA = pHash.substring( 0 , hash_length )
                    const keyB = pHash.substring( pHash.length - hash_length , pHash.length )
                    const password = pHash.substring( hash_length , pHash.length - hash_length )
                    const shift = password.length
            
                    const keyMerge = `${ keyA }${ keyB }`
            
                    const cipher = `${ keyMerge.substring( shift , keyMerge.length ) }${ keyMerge.substring( 0 , shift ) }`
            
                    const pKeys = keyMerge.split( '' )
                    const pCipher = cipher.split( '' )
            
                    const decrypt = password.split( '' ).map( ( chr , ind ) => {
                        let b: number = 0
                        let e: number = ind + 1
                        let pl: string[] = []
                        switch( chr.substring( b , e ) ) {
                            case pCipher[ 0 ]:      pl[ b ] = pKeys[ 0 ]
                                                    break
                            case pCipher[ 1 ]:      pl[ b ] = pKeys[ 1 ]
                                                    break
                            case pCipher[ 2 ]:      pl[ b ] = pKeys[ 2 ]
                                                    break
                            case pCipher[ 3 ]:      pl[ b ] = pKeys[ 3 ]
                                                    break
                            case pCipher[ 4 ]:      pl[ b ] = pKeys[ 4 ]
                                                    break
                            case pCipher[ 5 ]:      pl[ b ] = pKeys[ 5 ]
                                                    break
                            case pCipher[ 6 ]:      pl[ b ] = pKeys[ 6 ]
                                                    break
                            case pCipher[ 7 ]:      pl[ b ] = pKeys[ 7 ]
                                                    break
                            case pCipher[ 8 ]:      pl[ b ] = pKeys[ 8 ]
                                                    break
                            case pCipher[ 9 ]:      pl[ b ] = pKeys[ 9 ]
                                                    break
                            case pCipher[ 10 ]:     pl[ b ] = pKeys[ 10 ]
                                                    break
                            case pCipher[ 11 ]:     pl[ b ] = pKeys[ 11 ]
                                                    break
                            case pCipher[ 12 ]:     pl[ b ] = pKeys[ 12 ]
                                                    break
                            case pCipher[ 13 ]:     pl[ b ] = pKeys[ 13 ]
                                                    break
                            case pCipher[ 14 ]:     pl[ b ] = pKeys[ 14 ]
                                                    break
                            case pCipher[ 15 ]:     pl[ b ] = pKeys[ 15 ]
                                                    break
                            case pCipher[ 16 ]:     pl[ b ] = pKeys[ 16 ]
                                                    break
                            case pCipher[ 17 ]:     pl[ b ] = pKeys[ 17 ]
                                                    break
                            case pCipher[ 18 ]:     pl[ b ] = pKeys[ 18 ]
                                                    break
                            case pCipher[ 19 ]:     pl[ b ] = pKeys[ 19 ]
                                                    break
                            case pCipher[ 20 ]:     pl[ b ] = pKeys[ 20 ]
                                                    break
                            case pCipher[ 21 ]:     pl[ b ] = pKeys[ 21 ]
                                                    break
                            case pCipher[ 22 ]:     pl[ b ] = pKeys[ 22 ]
                                                    break
                            case pCipher[ 23 ]:     pl[ b ] = pKeys[ 23 ]
                                                    break
                            case pCipher[ 24 ]:     pl[ b ] = pKeys[ 24 ]
                                                    break
                            case pCipher[ 25 ]:     pl[ b ] = pKeys[ 25 ]
                                                    break
                            case pCipher[ 26 ]:     pl[ b ] = pKeys[ 26 ]
                                                    break
                            case pCipher[ 27 ]:     pl[ b ] = pKeys[ 27 ]
                                                    break
                            case pCipher[ 28 ]:     pl[ b ] = pKeys[ 28 ]
                                                    break
                            case pCipher[ 29 ]:     pl[ b ] = pKeys[ 29 ]
                                                    break
                            case pCipher[ 30 ]:     pl[ b ] = pKeys[ 30 ]
                                                    break
                            case pCipher[ 31 ]:     pl[ b ] = pKeys[ 31 ]
                                                    break
                            case pCipher[ 32 ]:     pl[ b ] = pKeys[ 32 ]
                                                    break
                            case pCipher[ 33 ]:     pl[ b ] = pKeys[ 33 ]
                                                    break
                            case pCipher[ 34 ]:     pl[ b ] = pKeys[ 34 ]
                                                    break
                            case pCipher[ 35 ]:     pl[ b ] = pKeys[ 35 ]
                                                    break
                        }

                        b++
                        e++
                        
                        return pl.join( '' )
                    
                    } )
                    
                    const deHash = decrypt.join( '' )
            
                    return deHash

                }
                return v1( hash )

                case '2':
                const v2: Function = ( hash: string ): string => {

                    const pHash = hash
                    const hash_length = 43
                    const keyA = pHash.substring( 0 , hash_length )
                    const keyB = pHash.substring( pHash.length - hash_length , pHash.length )
                    const password = pHash.substring( hash_length , pHash.length - hash_length )
                    const shift = password.length
            
                    const keyMerge = `${ keyA }${ keyB }`
            
                    const cipher = `${ keyMerge.substring( shift , keyMerge.length ) }${ keyMerge.substring( 0 , shift ) }`
            
                    const pKeys = keyMerge.split( '' )
                    const pCipher = cipher.split( '' )
            
                    const decrypt = password.split( '' ).map( ( chr , ind ) => {
                        let b: number = 0
                        let e: number = ind + 1
                        let pl: string[] = []
                        switch( chr.substring( b , e ) ) {
                            case pCipher[ 0 ]:      pl[ b ] = pKeys[ 0 ]
                                                    break
                            case pCipher[ 1 ]:      pl[ b ] = pKeys[ 1 ]
                                                    break
                            case pCipher[ 2 ]:      pl[ b ] = pKeys[ 2 ]
                                                    break
                            case pCipher[ 3 ]:      pl[ b ] = pKeys[ 3 ]
                                                    break
                            case pCipher[ 4 ]:      pl[ b ] = pKeys[ 4 ]
                                                    break
                            case pCipher[ 5 ]:      pl[ b ] = pKeys[ 5 ]
                                                    break
                            case pCipher[ 6 ]:      pl[ b ] = pKeys[ 6 ]
                                                    break
                            case pCipher[ 7 ]:      pl[ b ] = pKeys[ 7 ]
                                                    break
                            case pCipher[ 8 ]:      pl[ b ] = pKeys[ 8 ]
                                                    break
                            case pCipher[ 9 ]:      pl[ b ] = pKeys[ 9 ]
                                                    break
                            case pCipher[ 10 ]:     pl[ b ] = pKeys[ 10 ]
                                                    break
                            case pCipher[ 11 ]:     pl[ b ] = pKeys[ 11 ]
                                                    break
                            case pCipher[ 12 ]:     pl[ b ] = pKeys[ 12 ]
                                                    break
                            case pCipher[ 13 ]:     pl[ b ] = pKeys[ 13 ]
                                                    break
                            case pCipher[ 14 ]:     pl[ b ] = pKeys[ 14 ]
                                                    break
                            case pCipher[ 15 ]:     pl[ b ] = pKeys[ 15 ]
                                                    break
                            case pCipher[ 16 ]:     pl[ b ] = pKeys[ 16 ]
                                                    break
                            case pCipher[ 17 ]:     pl[ b ] = pKeys[ 17 ]
                                                    break
                            case pCipher[ 18 ]:     pl[ b ] = pKeys[ 18 ]
                                                    break
                            case pCipher[ 19 ]:     pl[ b ] = pKeys[ 19 ]
                                                    break
                            case pCipher[ 20 ]:     pl[ b ] = pKeys[ 20 ]
                                                    break
                            case pCipher[ 21 ]:     pl[ b ] = pKeys[ 21 ]
                                                    break
                            case pCipher[ 22 ]:     pl[ b ] = pKeys[ 22 ]
                                                    break
                            case pCipher[ 23 ]:     pl[ b ] = pKeys[ 23 ]
                                                    break
                            case pCipher[ 24 ]:     pl[ b ] = pKeys[ 24 ]
                                                    break
                            case pCipher[ 25 ]:     pl[ b ] = pKeys[ 25 ]
                                                    break
                            case pCipher[ 26 ]:     pl[ b ] = pKeys[ 26 ]
                                                    break
                            case pCipher[ 27 ]:     pl[ b ] = pKeys[ 27 ]
                                                    break
                            case pCipher[ 28 ]:     pl[ b ] = pKeys[ 28 ]
                                                    break
                            case pCipher[ 29 ]:     pl[ b ] = pKeys[ 29 ]
                                                    break
                            case pCipher[ 30 ]:     pl[ b ] = pKeys[ 30 ]
                                                    break
                            case pCipher[ 31 ]:     pl[ b ] = pKeys[ 31 ]
                                                    break
                            case pCipher[ 32 ]:     pl[ b ] = pKeys[ 32 ]
                                                    break
                            case pCipher[ 33 ]:     pl[ b ] = pKeys[ 33 ]
                                                    break
                            case pCipher[ 34 ]:     pl[ b ] = pKeys[ 34 ]
                                                    break
                            case pCipher[ 35 ]:     pl[ b ] = pKeys[ 35 ]
                                                    break
                            case pCipher[ 36 ]:     pl[ b ] = pKeys[ 36 ]
                                                    break
                            case pCipher[ 37 ]:     pl[ b ] = pKeys[ 37 ]
                                                    break
                            case pCipher[ 38 ]:     pl[ b ] = pKeys[ 38 ]
                                                    break
                            case pCipher[ 39 ]:     pl[ b ] = pKeys[ 39 ]
                                                    break
                            case pCipher[ 40 ]:     pl[ b ] = pKeys[ 40 ]
                                                    break
                            case pCipher[ 41 ]:     pl[ b ] = pKeys[ 41 ]
                                                    break
                            case pCipher[ 42 ]:     pl[ b ] = pKeys[ 42 ]
                                                    break
                            case pCipher[ 43 ]:     pl[ b ] = pKeys[ 43 ]
                                                    break
                            case pCipher[ 44 ]:     pl[ b ] = pKeys[ 44 ]
                                                    break
                            case pCipher[ 45 ]:     pl[ b ] = pKeys[ 45 ]
                                                    break
                            case pCipher[ 46 ]:     pl[ b ] = pKeys[ 46 ]
                                                    break
                            case pCipher[ 47 ]:     pl[ b ] = pKeys[ 47 ]
                                                    break
                            case pCipher[ 48 ]:     pl[ b ] = pKeys[ 48 ]
                                                    break
                            case pCipher[ 49 ]:     pl[ b ] = pKeys[ 49 ]
                                                    break
                            case pCipher[ 50 ]:     pl[ b ] = pKeys[ 50 ]
                                                    break
                            case pCipher[ 51 ]:     pl[ b ] = pKeys[ 51 ]
                                                    break
                            case pCipher[ 52 ]:     pl[ b ] = pKeys[ 52 ]
                                                    break
                            case pCipher[ 53 ]:     pl[ b ] = pKeys[ 53 ]
                                                    break
                            case pCipher[ 54 ]:     pl[ b ] = pKeys[ 54 ]
                                                    break
                            case pCipher[ 55 ]:     pl[ b ] = pKeys[ 55 ]
                                                    break
                            case pCipher[ 56 ]:     pl[ b ] = pKeys[ 56 ]
                                                    break
                            case pCipher[ 57 ]:     pl[ b ] = pKeys[ 57 ]
                                                    break
                            case pCipher[ 58 ]:     pl[ b ] = pKeys[ 58 ]
                                                    break
                            case pCipher[ 59 ]:     pl[ b ] = pKeys[ 59 ]
                                                    break
                            case pCipher[ 60 ]:     pl[ b ] = pKeys[ 60 ]
                                                    break
                            case pCipher[ 61 ]:     pl[ b ] = pKeys[ 61 ]
                                                    break
                            case pCipher[ 62 ]:     pl[ b ] = pKeys[ 62 ]
                                                    break
                            case pCipher[ 63 ]:     pl[ b ] = pKeys[ 63 ]
                                                    break
                            case pCipher[ 64 ]:     pl[ b ] = pKeys[ 64 ]
                                                    break
                            case pCipher[ 65 ]:     pl[ b ] = pKeys[ 65 ]
                                                    break
                            case pCipher[ 66 ]:     pl[ b ] = pKeys[ 66 ]
                                                    break
                            case pCipher[ 67 ]:     pl[ b ] = pKeys[ 67 ]
                                                    break
                            case pCipher[ 68 ]:     pl[ b ] = pKeys[ 68 ]
                                                    break
                            case pCipher[ 69 ]:     pl[ b ] = pKeys[ 69 ]
                                                    break
                            case pCipher[ 70 ]:     pl[ b ] = pKeys[ 70 ]
                                                    break
                            case pCipher[ 71 ]:     pl[ b ] = pKeys[ 71 ]
                                                    break
                            case pCipher[ 72 ]:     pl[ b ] = pKeys[ 72 ]
                                                    break
                            case pCipher[ 73 ]:     pl[ b ] = pKeys[ 73 ]
                                                    break
                            case pCipher[ 74 ]:     pl[ b ] = pKeys[ 74 ]
                                                    break
                            case pCipher[ 75 ]:     pl[ b ] = pKeys[ 75 ]
                                                    break
                            case pCipher[ 76 ]:     pl[ b ] = pKeys[ 76 ]
                                                    break
                            case pCipher[ 77 ]:     pl[ b ] = pKeys[ 77 ]
                                                    break
                            case pCipher[ 78 ]:     pl[ b ] = pKeys[ 78 ]
                                                    break
                            case pCipher[ 79 ]:     pl[ b ] = pKeys[ 79 ]
                                                    break
                            case pCipher[ 80 ]:     pl[ b ] = pKeys[ 80 ]
                                                    break
                            case pCipher[ 81 ]:     pl[ b ] = pKeys[ 81 ]
                                                    break
                            case pCipher[ 82 ]:     pl[ b ] = pKeys[ 82 ]
                                                    break
                            case pCipher[ 83 ]:     pl[ b ] = pKeys[ 83 ]
                                                    break
                            case pCipher[ 84 ]:     pl[ b ] = pKeys[ 84 ]
                                                    break
                            case pCipher[ 85 ]:     pl[ b ] = pKeys[ 85 ]
                                                    break
                        }

                        b++
                        e++

                        return pl.join( '' )

                    } )
                    
                    const deHash = decrypt.join( '' )
            
                    return deHash

                }
                return v2( hash )

            }

        }

        return ''

    }

}

export default Cipher