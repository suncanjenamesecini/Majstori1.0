import { ScrollView, StyleSheet, Text, View } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

function ExpensesOutput({ expenses, radnici, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      {/*
    
    <ScrollView
    //onScroll={({nativeEvent}) => onchange(nativeEvent)}
    showsHorizontalScrollIndicator={false}
    pagingEnabled
    horizontal
    >
      
      <ExpensesSummary ime={"Сви"} prezime={""}/>
      <ExpensesSummary ime={"Никола"} prezime={"Николић"} />
      {/*radnici.map((radnik) => <ExpensesSummary ime={radnik.ime} prezime={radnik.prezime}/>)
      
      <ExpensesSummary ime={"Марко"} prezime={"Марковић"} />
      <ExpensesSummary ime={"Жарко"} prezime={"Жарковић"} />
      <ExpensesSummary ime={"Станко"} prezime={"Станковић"} />
      <ExpensesSummary ime={"Борко"} prezime={"Борковић"} />
      <ExpensesSummary ime={"Јанко"} prezime={"Јанковић"} />
      <ExpensesSummary ime={"Живојин"} prezime={"Живојиновић"} />
      <ExpensesSummary ime={"Мирко"} prezime={"Мирковић"} />
      <ExpensesSummary ime={"Трпимир"} prezime={"Трпимировић"} />
      <ExpensesSummary ime={"Звонимир"} prezime={"Звонимировић"} />
    </ScrollView>*/}
      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
