import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Input from './Input';
import Button from '../UI/Button';
import { getFormattedDate } from '../../util/date';
import { GlobalStyles } from '../../constants/styles';

//function renderExpenseItem(itemData) {
//  return <ExpenseItem {...itemData.item} />;
//}

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {
  const [inputs, setInputs] = useState({
    /*
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true,
    },*/
    spratova: {
      value: defaultValues ? defaultValues.spratova.toString() : '',
      isValid: true,
    },
    /*
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : '',
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : '',
      isValid: true,
    },*/
    brZgrade: {
      value: defaultValues ? defaultValues.brZgrade : '',
      isValid: true,
    },
    adresa: {
      value: defaultValues ? defaultValues.adresa : '',
      isValid: true,
    },
    tip: {
      value: defaultValues ? defaultValues.tip : '',
      isValid: true,
    },
    datum: {
      value: defaultValues ? defaultValues.datum : '',
      isValid: true,
    },
    datumUlaz: {
      value: defaultValues ? defaultValues.datumUlaz : '',
      isValid: true,
    },
    datumIzlaz: {
      value: defaultValues ? defaultValues.datumIzlaz : '',
      isValid: true,
    },
    status: {
      value: defaultValues ? defaultValues.status : '',
      isValid: true,
    },
    radnik: {
      value: defaultValues ? defaultValues.radnik : '',
      isValid: true,
    },
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    
    const expenseData = {
      
      brZgrade: inputs.brZgrade.value,
      spratova: inputs.spratova.value,
      datum: inputs.datum.value,
      tip: inputs.tip.value,
      datumUlaz: inputs.datumUlaz.value,
      datumIzlaz: inputs.datumIzlaz.value,
      adresa: inputs.adresa.value,
      status: inputs.status.value,
      radnik: inputs.radnik.value,
    };

    const brZgradeIsValid = expenseData.brZgrade.trim().length > 0;
    const spratovaIsValid = expenseData.spratova.trim().length > 0;
    const datumIsValid = expenseData.datum.trim().length > 0;
    const tipIsValid = expenseData.tip.trim().length > 0;
    const datumUlazIsValid = expenseData.datumUlaz.trim().length > 0;
    const datumIzlazIsValid = expenseData.datumIzlaz.trim().length > 0;
    const adresaIsValid = expenseData.adresa.trim().length > 0;
    const statusIsValid = expenseData.status.trim().length > 0;
    const radnikIsValid = expenseData.radnik.trim().length > 0;

    if (!brZgradeIsValid || !spratovaIsValid  || !datumIsValid || !tipIsValid || !datumUlazIsValid || !datumIzlazIsValid || !adresaIsValid || !statusIsValid || !radnikIsValid) {
      // Alert.alert('Invalid input', 'Please check your input values');
      setInputs((curInputs) => {
        return {
          //amount: { value: curInputs.amount.value, isValid: amountIsValid },
          //date: { value: curInputs.date.value, isValid: dateIsValid },
          //description: {
          //  value: curInputs.description.value,
          //  isValid: descriptionIsValid,
          //},
          brZgrade: {
            value: curInputs.brZgrade.value,
            isValid: brZgradeIsValid,
          },
          spratova: {
            value: curInputs.spratova.value,
            isValid: spratovaIsValid,
          },
          datum: {
            value: curInputs.datum.value,
            isValid: datumIsValid,
          },
          tip: {
            value: curInputs.tip.value,
            isValid: tipIsValid,
          },
          datumUlaz: {
            value: curInputs.datumUlaz.value,
            isValid: datumUlazIsValid,
          },
          datumIzlaz: {
            value: curInputs.datumIzlaz.value,
            isValid: datumIzlazIsValid,
          },
          adresa: {
            value: curInputs.adresa.value,
            isValid: adresaIsValid,
          },
          status: {
            value: curInputs.status.value,
            isValid: statusIsValid,
          },
          radnik: {
            value: curInputs.radnik.value,
            isValid: radnikIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
    /*
    
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      // Alert.alert('Invalid input', 'Please check your input values');
      setInputs((curInputs) => {
        return {
          amount: { value: curInputs.amount.value, isValid: amountIsValid },
          date: { value: curInputs.date.value, isValid: dateIsValid },
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData); */
  }

  /*
  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

    */
   const formIsInvalid = false;

  return (
    <View style={styles.form}>
      {/*<Text style={styles.title}>Your Expense</Text>*/}
      {/*
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            value: inputs.amount.value,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Spratova"
          invalid={!inputs.spratova.isValid}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, 'spratova'),
            value: inputs.spratova.value,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputs.date.value,
          }}
        />
      </View>*/}
      {/*<Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          // autoCapitalize: 'none'
          // autoCorrect: false // default is true
          onChangeText: inputChangedHandler.bind(this, 'description'),
          value: inputs.description.value,
        }}
      />*/}
      <ScrollView>
    
      <Input
        label="Број зграде"
        invalid={!inputs.brZgrade.isValid}
        textInputConfig={{
          //multiline: true,
          // autoCapitalize: 'none'
          // autoCorrect: false // default is true
          onChangeText: inputChangedHandler.bind(this, 'brZgrade'),
          value: inputs.brZgrade.value,
        }}
      />
      <Input
        label="Спратова"
        invalid={!inputs.spratova.isValid}
        textInputConfig={{
          //multiline: true,
          // autoCapitalize: 'none'
          // autoCorrect: false // default is true
          onChangeText: inputChangedHandler.bind(this, 'spratova'),
          value: inputs.spratova.value,
        }}
      />
      <Input
        label="Датум"
        invalid={!inputs.datum.isValid}
        textInputConfig={{
          //multiline: true,
          // autoCapitalize: 'none'
          // autoCorrect: false // default is true
          onChangeText: inputChangedHandler.bind(this, 'datum'),
          value: inputs.datum.value,
        }}
      />
      <Input
        label="Тип"
        invalid={!inputs.tip.isValid}
        textInputConfig={{
          //multiline: true,
          // autoCapitalize: 'none'
          // autoCorrect: false // default is true
          onChangeText: inputChangedHandler.bind(this, 'tip'),
          value: inputs.tip.value,
        }}
      />
      <Input
        label="Датум улаза"
        invalid={!inputs.tip.isValid}
        textInputConfig={{
          //multiline: true,
          // autoCapitalize: 'none'
          // autoCorrect: false // default is true
          onChangeText: inputChangedHandler.bind(this, 'datumUlaz'),
          value: inputs.datumUlaz.value,
        }}
      />
      <Input
        label="Датум излаза"
        invalid={!inputs.tip.isValid}
        textInputConfig={{
          //multiline: true,
          // autoCapitalize: 'none'
          // autoCorrect: false // default is true
          onChangeText: inputChangedHandler.bind(this, 'datumIzlaz'),
          value: inputs.datumIzlaz.value,
        }}
      />
      <Input
        label="Адреса"
        invalid={!inputs.adresa.isValid}
        textInputConfig={{
          multiline: true,
          // autoCapitalize: 'none'
          // autoCorrect: false // default is true
          onChangeText: inputChangedHandler.bind(this, 'adresa'),
          value: inputs.adresa.value,
        }}
      />
      <Input
        label="Статус"
        invalid={!inputs.status.isValid}
        textInputConfig={{
        //multiline: true,
          // autoCapitalize: 'none'
          // autoCorrect: false // default is true
          onChangeText: inputChangedHandler.bind(this, 'status'),
          value: inputs.status.value,
        }}
      />
      <Input
        label="Radnik"
        invalid={!inputs.radnik.isValid}
        textInputConfig={{
        //multiline: true,
          // autoCapitalize: 'none'
          // autoCorrect: false // default is true
          onChangeText: inputChangedHandler.bind(this, 'radnik'),
          value: inputs.radnik.value,
        }}
      />
      
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input values - please check your entered data!
        </Text>
      )}
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Одустани
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </ScrollView>
    </View>
  )
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  errorText: {
    textAlign: 'center',
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
