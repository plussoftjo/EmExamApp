import React from "react";
import { View } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { connect } from "react-redux";

// Contents
import { StartTheQuestions, QuestionsShow, Results } from "./Contents";
// Functions
import { CallQuestions } from "./Functions";

let Questions = (props) => {
  let [type, setType] = React.useState("StartTheQuestions");

  return (
    <Layout style={{ flex: 1 }}>
      {type == "StartTheQuestions" && (
        <StartTheQuestions
          navigation={props.navigation}
          changeToQuestions={() => {
            setType("QuestionsShow");
          }}
        />
      )}
      {type == "QuestionsShow" && (
        <QuestionsShow
          changeToResults={() => {
            setType("Results");
          }}
        />
      )}

      {type == "Results" && <Results navigation={props.navigation} />}
      {/* // Functions  */}
      <CallQuestions />
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
