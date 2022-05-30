import { View, Text, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";

function ExpensesSummary({ ime, prezime }) {
  /*
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);*/

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{ime + " " + prezime}</Text>
      {/*<Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>*/}
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    margin: 4,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 10,
    paddingBottom: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
