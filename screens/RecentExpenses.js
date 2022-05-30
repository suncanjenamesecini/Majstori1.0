//import { useContext, useEffect, useState } from 'react';

//import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
//import ErrorOverlay from '../components/UI/ErrorOverlay';
//import LoadingOverlay from '../components/UI/LoadingOverlay';
//import { ExpensesContext } from '../store/expenses-context';
//import { getDateMinusDays } from '../util/date';
//import { fetchExpenses } from '../util/http';

///////////////////////////////////////////////
import { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import RadnikForm from '../components/ExpensesOutput/RadnikForm';
import ErrorOverlay from '../components/UI/ErrorOverlay';
import IconButton from '../components/UI/IconButton';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { GlobalStyles } from '../constants/styles';
import { RadniciContext } from '../store/radnici-context';
import { storeRadnik, updateRadnik, deleteRadnik } from '../util/http';

function RecentExpenses({ route, navigation }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();

  const radniciCtx = useContext(RadniciContext);

  const editedRadnikId = route.params?.radnikId;
  const isEditing = !!editedRadnikId;

  const selectedRadnik = radniciCtx.radnici.find(
    (radnik) => radnik.id === editedRadnikId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Izmjena radnika' : 'Новi radnik',
    });
  }, [navigation, isEditing]);

  async function deleteRadnikHandler() {
    setIsSubmitting(true);
    try {
      await deleteRadnik(editedRadnikId);
      radniciCtx.deleteRadnik(editedRadnikId);
      //navigation.goBack();
      navigation.navigate('AllExpenses');
    } catch (error) {
      setError('Није могуће обрисати податке, покушајте опет касније!');
      setIsSubmitting(false);
    }
  }

  function cancelHandler() {
    //navigation.goBack();
    navigation.navigate('AllExpenses');
  }

  async function confirmHandler(radnikData) {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        radniciCtx.updateRadnik(editedRadnikId, radnikData);
        await updateRadnik(editedRadnikId, radnikData);
      } else {
        const id = await storeRadnik(radnikData);
        radniciCtx.addRadnik({ ...radnikData, id: id });
      }
      //navigation.goBack();
      navigation.navigate('AllExpenses');
    } catch (error) {
      setError('Није могуће снимити податке - покушајте опет касније!');
      setIsSubmitting(false);
    }
  }

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <RadnikForm
        submitButtonLabel={isEditing ? 'Измени' : 'Додај'}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        defaultValues={selectedRadnik}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default RecentExpenses;
//export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});

//function RecentExpenses({ route, navigation }) {
  
  //const [isFetching, setIsFetching] = useState(true);
  //const [error, setError] = useState();

  /*
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError('Could not fetch expenses!');
      }
      setIsFetching(false);
    }

    getExpenses();
  }, []);*/

  //if (error && !isFetching) {
  //  return <ErrorOverlay message={error} />;
  //}

  //if (isFetching) {
  //  return <LoadingOverlay />;
  //}
/*
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });*/

  //return (
    //<ExpensesOutput
     // expenses={expenses}
      //expensesPeriod="Last 7 Days"
      //fallbackText="No expenses registered for the last 7 days."
   // />
  //);
//}

//export default RecentExpenses;