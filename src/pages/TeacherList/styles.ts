import { StyleSheet } from 'react-native';

const styles= StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f0f0f7'
    },

    teacherList: {
        marginTop: -40,
    },

    searchForm: {
        marginBottom: 24,
    },

    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular'
    },

    inputBlock: {
        width: '48%',
    },

    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },
    
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    submitButton: {
        backgroundColor: '#04d461',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },

    submitButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    }
})


export default styles;