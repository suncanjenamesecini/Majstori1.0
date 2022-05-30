import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Input from '../ManageExpense/Input';
import Button from '../UI/Button';
import { getFormattedDate } from '../../util/date';
import { GlobalStyles } from '../../constants/styles';

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {
  const [inputs, setInputs] = useState({
    
    ime: {
        value: defaultValues ? defaultValues.ime : '',
        isValid: true,
      },
    prezime: {
      value: defaultValues ? defaultValues.prezime : '',
      isValid: true,
    },
    username: {
      value: defaultValues ? defaultValues.username : '',
      isValid: true,
    },
    sifra: {
      value: defaultValues ? defaultValues.sifra : '',
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
    
    const radnikData = {
      
      ime: inputs.ime.value,
      prezime: inputs.prezime.value,
      username: inputs.username.value,
      sifra: inputs.sifra.value,
    };

    const imeIsValid = radnikData.ime.trim().length > 0;
    const prezimeIsValid = radnikData.prezime.trim().length > 0;
    const usernameIsValid = radnikData.username.trim().length > 0;
    const sifraIsValid = radnikData.sifra.trim().length > 0;

    if (!imeIsValid || !prezimeIsValid  || !usernameIsValid || !sifraIsValid) {
      // Alert.alert('Invalid input', 'Please check your input values');
      setInputs((curInputs) => {
        return {
          //amount: { value: curInputs.amount.value, isValid: amountIsValid },
          //date: { value: curInputs.date.value, isValid: dateIsValid },
          //description: {
          //  value: curInputs.description.value,
          //  isValid: descriptionIsValid,
          //},
          ime: {
            value: curInputs.ime.value,
            isValid: imeIsValid,
          },
          prezime: {
            value: curInputs.prezime.value,
            isValid: prezimeIsValid,
          },
          username: {
            value: curInputs.username.value,
            isValid: usernameIsValid,
          },
          sifra: {
            value: curInputs.sifra.value,
            isValid: sifraIsValid,
          },
        };
      });
      return;
    }

    onSubmit(radnikData);
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

  
  const formIsInvalid =
    !inputs.ime.isValid ||
    !inputs.prezime.isValid ||
    !inputs.username.isValid ||
    !inputs.sifra.isValid;

    
   //const formIsInvalid = false;

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

      <Input
        label="Ime"
        invalid={!inputs.ime.isValid}
        textInputConfig={{
          //multiline: true,
          // autoCapitalize: 'none'
          // autoCorrect: false // default is true
          onChangeText: inputChangedHandler.bind(this, 'ime'),
          value: inputs.ime.value,
        }}
      />
      <Input
        label="Prezime"
        invalid={!inputs.prezime.isValid}
        textInputConfig={{
          //multiline: true,
          // autoCapitalize: 'none'
          // autoCorrect: false // default is true
          onChangeText: inputChangedHandler.bind(this, 'prezime'),
          value: inputs.prezime.value,
        }}
      />
      <Input
        label="Username"
        invalid={!inputs.username.isValid}
        textInputConfig={{
          //multiline: true,
          // autoCapitalize: 'none'
          // autoCorrect: false // default is true
          onChangeText: inputChangedHandler.bind(this, 'username'),
          value: inputs.username.value,
        }}
      />
      <Input
        label="Sifra"
        invalid={!inputs.sifra.isValid}
        textInputConfig={{
          //multiline: true,
          // autoCapitalize: 'none'
          // autoCorrect: false // default is true
          onChangeText: inputChangedHandler.bind(this, 'sifra'),
          value: inputs.sifra.value,
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
    </View>
  );
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
