import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 10
    },
    topBarContent: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonWrapper: {
        borderBottomColor: '#9871F5',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    topBarLeftContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectImg: {
        width: 30,
        height: 30,
    }
});
export default styles;