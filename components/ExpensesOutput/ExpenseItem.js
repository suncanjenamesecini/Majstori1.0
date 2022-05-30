import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";

function ExpenseItem({
  id,
  description,
  amount,
  date,
  adresa,
  podaciZgrada,
  tip,
  datum,
  datumUlaz,
  datumIzlaz,
  status,
  brZgrade,
  spratova,
}) {
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  }

  if (status == "Креирано") {
    return (
      <Pressable
        onPress={expensePressHandler}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.expenseItemKreirano}>
          <View style={styles.raspored}>
            <View>
              <View style={styles.raspored}>
                <FontAwesome5
                  name="building"
                  size={18}
                  color={GlobalStyles.colors.primary50}
                />
                <Text style={[styles.textBase, styles.description]}>
                  {brZgrade}
                </Text>
              </View>
              <View style={styles.raspored}>
                <FontAwesome5
                  name="building"
                  size={18}
                  color={GlobalStyles.colors.primary50}
                />
                <Text style={[styles.textBase, styles.description]}>
                  {spratova}
                </Text>
              </View>
              <View style={styles.raspored}>
                <Ionicons
                  name="calendar"
                  size={18}
                  color={GlobalStyles.colors.primary50}
                />
                <Text style={styles.textBase}>{datum}</Text>
              </View>
              <View style={styles.raspored}>
                <MaterialCommunityIcons
                  name="format-list-bulleted-type"
                  size={22}
                  color={GlobalStyles.colors.primary50}
                />
                <Text style={[styles.textBase, styles.description]}>{tip}</Text>
              </View>
              {/*<Text style={styles.textBase}>{getFormattedDate(date)}</Text>*/}
            </View>
            <View style={styles.amountContainer}>
              <Text style={styles.amount}>{status}</Text>
            </View>
          </View>
          <View style={styles.raspored}>
            <Ionicons
              name="location"
              size={18}
              color={GlobalStyles.colors.primary50}
            />
            <Text style={[styles.textBase, styles.description]}>{adresa}</Text>
          </View>
        </View>
      </Pressable>
    );
  } else if (status == "У процесу") {
    return (
      <Pressable
        onPress={expensePressHandler}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.expenseItemUProcesu}>
          <View style={styles.raspored}>
            <View>
              <View style={styles.raspored}>
                <FontAwesome5
                  name="building"
                  size={18}
                  color={GlobalStyles.colors.primary50}
                />
                <Text style={[styles.textBase, styles.description]}>
                  {brZgrade}
                </Text>
              </View>
              <View style={styles.raspored}>
                <FontAwesome5
                  name="building"
                  size={18}
                  color={GlobalStyles.colors.primary50}
                />
                <Text style={[styles.textBase, styles.description]}>
                  {spratova}
                </Text>
              </View>
              <View style={styles.raspored}>
                <Ionicons
                  name="calendar"
                  size={18}
                  color={GlobalStyles.colors.primary50}
                />
                <Text style={styles.textBase}>{datum}</Text>
              </View>
              <View style={styles.raspored}>
                <MaterialCommunityIcons
                  name="format-list-bulleted-type"
                  size={22}
                  color={GlobalStyles.colors.primary50}
                />
                <Text style={[styles.textBase, styles.description]}>{tip}</Text>
              </View>
              <View style={styles.raspored}>
                <Ionicons
                  name="calendar"
                  size={18}
                  color={GlobalStyles.colors.primary50}
                />
                <Text style={styles.textBase}>{datumUlaz}</Text>
              </View>

              {/*<Text style={styles.textBase}>{getFormattedDate(date)}</Text>*/}
            </View>
            <View style={styles.amountContainer}>
              <Text style={styles.amount}>{status}</Text>
            </View>
          </View>
          <View style={styles.raspored}>
            <Ionicons
              name="location"
              size={18}
              color={GlobalStyles.colors.primary50}
            />
            <Text style={[styles.textBase, styles.description]}>{adresa}</Text>
          </View>
        </View>
      </Pressable>
    );
  } else {
    return (
      <Pressable
        onPress={expensePressHandler}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.expenseItemZavrseno}>
          <View style={styles.raspored}>
            <View>
              <View style={styles.raspored}>
                <FontAwesome5
                  name="building"
                  size={18}
                  color={GlobalStyles.colors.primary50}
                />
                <Text style={[styles.textBase, styles.description]}>
                  {brZgrade}
                </Text>
              </View>
              <View style={styles.raspored}>
                <FontAwesome5
                  name="building"
                  size={18}
                  color={GlobalStyles.colors.primary50}
                />
                <Text style={[styles.textBase, styles.description]}>
                  {spratova}
                </Text>
              </View>
              <View style={styles.raspored}>
                <Ionicons
                  name="calendar"
                  size={18}
                  color={GlobalStyles.colors.primary50}
                />
                <Text style={styles.textBase}>{datum}</Text>
              </View>
              <View style={styles.raspored}>
                <MaterialCommunityIcons
                  name="format-list-bulleted-type"
                  size={22}
                  color={GlobalStyles.colors.primary50}
                />
                <Text style={[styles.textBase, styles.description]}>{tip}</Text>
              </View>
              <View style={styles.raspored}>
                <Ionicons
                  name="calendar"
                  size={18}
                  color={GlobalStyles.colors.primary50}
                />
                <Text style={styles.textBase}>{datumUlaz}</Text>
              </View>
              <View style={styles.raspored}>
                <Ionicons
                  name="calendar"
                  size={18}
                  color={GlobalStyles.colors.primary50}
                />
                <Text style={styles.textBase}>{datumIzlaz}</Text>
              </View>
              {/*<Text style={styles.textBase}>{getFormattedDate(date)}</Text>*/}
            </View>
            <View style={styles.amountContainer}>
              <Text style={styles.amount}>{status}</Text>
            </View>
          </View>
          <View style={[styles.raspored, styles.adresa]}>
            <Ionicons
              name="location"
              size={18}
              color={GlobalStyles.colors.primary50}
            />
            <Text style={[styles.textBase, styles.description]}>{adresa}</Text>
          </View>
        </View>
      </Pressable>
    );
  }
}

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItemZavrseno: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.green50,
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  expenseItemUProcesu: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.accent500,
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  expenseItemKreirano: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.error500,
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    marginLeft: 5,
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
    marginLeft: 5,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginTop: 10,
    marginBottom: 125,
    marginRight: 10,
    marginLeft: 6,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  raspored: {
    flexDirection: "row",
  },
  adresa: {
    marginRight: 5,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
