import { StyleSheet } from 'react-native';
import { _primary, _tertiary, _primary2, _tertiary2 } from '../../utils/colors';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: _tertiary2,
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: RFValue(10),
		borderRadius: RFValue(5),
		marginBottom: RFValue(15),
	},
	service: {
		color: _primary2,
		fontFamily: 'Inter-Medium',
		fontSize: RFValue(14),
	},
	order: { color: _primary2, fontSize: RFValue(12), fontFamily: 'Inter-Bold' },
	rate: { color: _primary2, fontSize: RFValue(12) },
	input_container: {
		flex: 0.25,
		paddingVertical: 0,
	},
	input: {
		color: _primary,
		fontFamily: 'Inter-Medium',
		fontSize: RFValue(14),
		textAlign: 'center',
		paddingVertical: 0,
		height: RFValue(20),
		borderRadius: RFValue(5),
		borderColor: _tertiary,
		borderWidth: RFValue(1),
	},
});
