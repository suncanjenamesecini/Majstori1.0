//import { useContext } from 'react';
import { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
//import { useContext, useEffect, useState } from 'react';

//import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import ErrorOverlay from "../components/UI/ErrorOverlay";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { RadniciContext } from "../store/radnici-context";
//import { getDateMinusDays } from '../util/date';
import { fetchZaduzenja, fetchRadnici } from "../util/http";
import ExpensesSummary from "../components/ExpensesOutput/ExpensesSummary";
import { GlobalStyles } from "../constants/styles";
import ExpensesList from "../components/ExpensesOutput/ExpensesList";

let localRadnici = [];
//let isfiltriranaZaduzenja = [];
//let filtriraj = '';
function AllExpenses() {
  //let localRadnici=[];
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const [filtriranaZaduzenja, setFiltriranaZaduzenja] = useState([]);
  const [kliknutoIme, setKliknutoIme] = useState("");

  const expensesCtx = useContext(ExpensesContext);
  const radniciCtx = useContext(RadniciContext);

  /*
  function filtr (id) {
    filtriraj = id;
    console.log("Ispis!!!!!!!!!");
  }*/

  function radniciPressHandler() {
    /*
    navigation.navigate('ManageExpense', {
      expenseId: id
    });*/
    console.log(key);
    //() => console.log(radnik.id)
  }

  useEffect(() => {
    async function getRadnici() {
      setIsFetching(true);
      try {
        const radnici = await fetchRadnici();
        localRadnici = radnici;
        console.log("******~~~~~~~~~~~~~~`");
        console.log(localRadnici);
        radniciCtx.setRadnici(radnici); //ne radi, ne znam zasto.......................
        console.log("*****************************************");
        console.log(radniciCtx.radnici);
      } catch (error) {
        setError("Could not fetch radnici!");
      }
      setIsFetching(false);
    }

    getRadnici();
  }, []);

  useEffect(() => {
    async function getZaduzenja() {
      setIsFetching(true);
      try {
        const expenses = await fetchZaduzenja();
        console.log("~~~~~~~~~~~~~~~~~~~~~~`");
        console.log(expenses);
        expensesCtx.setExpenses(expenses);
        setFiltriranaZaduzenja(expensesCtx.expenses);
      } catch (error) {
        setError("Could not fetch expenses!");
      }
      setIsFetching(false);
    }

    getZaduzenja();
  }, []);

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  //const expensesCtx = useContext(ExpensesContext);
  let content = <Text style={styles.infoText}>"Nema zaduzenja!"</Text>;
  //setIsfiltriranaZaduzenja(expensesCtx.expenses);
  //let filtriranaZaduzenja = expensesCtx.expenses;

  /*
  if(kliknutoIme != '' || kliknutoIme != 'svi') {
    filtriranaZaduzenja = expensesCtx.expenses.filter( (zaduzenje) => {return zaduzenje.radnik == kliknutoIme});
  }*/
  //НЕ РАДИИИИ, САМО СЕ ИСФИЛТРИРА НА ПОЧЕТКУ, НЕЋЕ НА СВАКИ КЛИК
  /*
  if(kliknutoIme =="Јован Јовановић") {
    filtriranaZaduzenja = expensesCtx.expenses.filter( (zaduzenje) => {return zaduzenje.radnik == "Јован Јовановић"});
  }*/

  /*
  if ( filtriranaZaduzenja.length > 0) {
    content = <ExpensesList expenses={filtriranaZaduzenja} />;
  }*/
  if (filtriranaZaduzenja.length > 0) {
    content = <ExpensesList expenses={filtriranaZaduzenja} />;
  } else {
    content = <ExpensesList expenses={expensesCtx.expenses} />; //TODO popraviti da ovo bude i prazno za slucaj da nema zaduzenja za majstora, ne samo za pocetak
  }

  return (
    //<ExpensesOutput
    // expenses={expensesCtx.expenses}
    //radnici={localRadnici}
    //expensesPeriod="Total"
    // fallbackText="No registered expenses found!"
    ///>
    <View style={styles.container}>
      <ScrollView
        //onScroll={({nativeEvent}) => onchange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
      >
        <Pressable
          key={"svi"}
          onPress={() => {
            console.log("svi");
            setKliknutoIme("svi");
            console.log(kliknutoIme);
          }}
        >
          <ExpensesSummary ime={"Сви"} prezime={""} />
        </Pressable>
        {localRadnici.map((radnik) => {
          return (
            <Pressable
              key={radnik.id}
              onPress={() => {
                console.log("" + radnik.ime + " " + radnik.prezime);
                setKliknutoIme("" + radnik.ime + " " + radnik.prezime);
                setFiltriranaZaduzenja(
                  expensesCtx.expenses.filter((zaduzenje) => {
                    return zaduzenje.radnik.trim() == kliknutoIme.trim();
                  })
                );
                console.log(kliknutoIme);
              }}
            >
              <ExpensesSummary
                key={radnik.id}
                ime={radnik.ime}
                prezime={radnik.prezime}
              />
            </Pressable>
          );
        })}

        {/*<ExpensesSummary ime={"Сви"} prezime={""}/>
      //<ExpensesSummary ime={"Никола"} prezime={"Николић"} />*/}
      </ScrollView>
      {content}
    </View>
  );
}

export default AllExpenses;

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
