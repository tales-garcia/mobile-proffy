import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7'
    },
    teacherList : {
        marginTop: -30
    },
    filterImg: {
        height: 25,
        width: 25,
        marginRight: 12
    },
    dropdownTitle: {
        fontFamily: 'Archivo_400Regular',
        fontSize: 16,
        color: '#fff'
    },
    searchForm: {
        marginBottom: 24
    },
    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular'
    },
    input: {
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputBlock: {
        width: '48%'
    },
    dropdownButtonWrapper: {
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16
    },
    dropdownContent: {
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: 8,
        width: '100%',
        overflow: 'hidden'
    },
    dropdownItem: {
        backgroundColor: '#fff',
        width: '100%',
        paddingHorizontal: 15,
        height: 54,
        flex: 1,
        justifyContent: 'center'
    },
    dropdownItemText: {
        fontFamily: 'Archivo_400Regular',
        fontSize: 14,
        color: '#6a6180'
    },
    dropdownItemWrapper: {
        borderTopColor: '#E6E6F0',
        borderTopWidth: 1
    }
});

export default styles;