export const mapContentToName = (content: string): string => {
    switch (content) {
        case 'firstName':
            return 'First Name'
        case 'lastName':
            return 'Last Name'
        case 'phoneNumber':
            return 'Phone Number'
        case 'email':
            return 'Email'
        case 'title':
            return 'Title'
        case 'address':
            return 'Address'
        case 'personId':
            return 'PersonId'
        case 'password':
            return 'Password'
        case 'position':
            return 'Position'
        case 'accountType':
            return 'Account Type'
        case 'attachment':
            return 'Attachment'
        default:
            return ''
    }
}
