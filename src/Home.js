import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// imports inject and observer from 'mobx-react':
import {inject, useObserver} from 'mobx-react';

const App = (props) =>
  useObserver(() => {
    console.log(props);
    const {count, incCount, getCount} = props.store;
    const {data, getSize, preloadData} = props.list;
    // const {count, incCount, getCount} = props.store;
    // const {data, getSize, preloadData} = props.list;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text>{`data: ${JSON.stringify(data)}`}</Text>
                <Text>{`getSize: ${getSize}`}</Text>
                <Button title="Click" onPress={preloadData} />
              </View>
              <View style={styles.sectionContainer}>
                <Text>{`Count: ${count}`}</Text>
                <Text>{`getCount: ${getCount}`}</Text>
                <Button title="Click" onPress={() => incCount()} />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  });

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default inject('store', 'list')(App);
// export default App;
