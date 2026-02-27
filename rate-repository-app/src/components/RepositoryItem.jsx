import { StyleSheet, View, Image } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.basic,
    paddingRight: 15,
    paddingLeft: 15,
  },
  text: {
    color: theme.colors.unique,
  },
});

const statisticsStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 10,
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  name: {
    paddingLeft: 40,
    alignSelf: "center",
  },
  value: {
    fontSize: theme.fontSizes.subheading,
    paddingLeft: 40,
    alignSelf: "center",
  },
});

const avatarStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 30,
  },
  avatar: {
    width: 50,
    height: 50,
    flexGrow: 0,
  },
});

const titleStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 30,
  },

  fullName: {
    fontWeight: theme.fontWeights.bold,
    paddingBottom: 10,
  },
  description: {
    fontSize: theme.fontSizes.body,
    paddingBottom: 10,
  },

  languageTag: {
    color: theme.colors.basic,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    padding: 8,
  },
});
const Titles = ({ fullName, description, language }) => {
  return (
    <View style={titleStyle.container}>
      <Text
        color="textPrimary"
        fontSizes="subheading"
        style={titleStyle.fullName}
      >
        {fullName}
      </Text>
      <Text color="textSecondary" style={titleStyle.description}>
        {description}
      </Text>
      <Text style={titleStyle.languageTag}>{language}</Text>
    </View>
  );
};

const CardAvatar = ({ fullName, description, ownerAvatarUrl, language }) => {
  return (
    <View style={avatarStyles.container}>
      <Image
        style={avatarStyles.avatar}
        source={{
          uri: ownerAvatarUrl,
        }}
      />
      <Titles
        fullName={fullName}
        description={description}
        language={language}
      />
    </View>
  );
};

const Statistics = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) => {
  const compactFormatter = (number) => {
    const compactFormatter = new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
      maximumSignificantDigits: Number(number) <= 10000 ? 2 : 3,
    });
    return compactFormatter.format(Number(number));
  };

  return (
    <View style={statisticsStyles.container}>
      <View style={statisticsStyles.column}>
        <Text
          color="textPrimary"
          fontWeight="bold"
          style={statisticsStyles.value}
        >{`${compactFormatter(Number(stargazersCount))}`}</Text>
        <Text
          color="textSecondary"
          fontSize="subheading"
          style={statisticsStyles.name}
        >{`star`}</Text>
      </View>
      <View style={statisticsStyles.column}>
        <Text
          color="textPrimary"
          fontWeight="bold"
          style={statisticsStyles.value}
        >{`${compactFormatter(Number(forksCount))}`}</Text>
        <Text style={statisticsStyles.name}>{`forks`}</Text>
      </View>
      <View style={statisticsStyles.column}>
        <Text
          color="textPrimary"
          fontWeight="bold"
          style={statisticsStyles.value}
        >{`${Number(reviewCount)}`}</Text>
        <Text
          color="textSecondary"
          fontSize="subheading"
          style={statisticsStyles.name}
        >{`review`}</Text>
      </View>
      <View style={statisticsStyles.column}>
        <Text
          color="textPrimary"
          fontWeight="bold"
          style={statisticsStyles.value}
        >{`${Number(ratingAverage)}`}</Text>
        <Text
          color="textSecondary"
          fontSize="subheading"
          style={statisticsStyles.name}
        >{`rating`}</Text>
      </View>
    </View>
  );
};

const RepositoryItem = ({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) => {
  return (
    <View style={styles.container}>
      <CardAvatar
        ownerAvatarUrl={ownerAvatarUrl}
        fullName={fullName}
        description={description}
        language={language}
      />
      <Statistics
        stargazersCount={stargazersCount}
        forksCount={forksCount}
        reviewCount={reviewCount}
        ratingAverage={ratingAverage}
      />
    </View>
  );
};
export default RepositoryItem;
