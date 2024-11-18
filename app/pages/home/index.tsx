import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Card, Text, Button, useTheme, FAB } from 'react-native-paper';

const Home = () => {
  const theme = useTheme();

  const recentProjects = [
    { id: 1, title: '我的项目 1', date: '2023-12-20' },
    { id: 2, title: '我的项目 2', date: '2023-12-19' },
  ];

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="剪映" /> 
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar.Header>

      <ScrollView style={styles.content}>
        <View style={styles.quickActions}>
          <Button
            mode="contained"
            icon="video-plus"
            style={styles.actionButton}
            onPress={() => {}}>
            新建项目
          </Button>
          <Button
            mode="outlined"
            icon="folder"
            style={styles.actionButton}
            onPress={() => {}}>
            打开项目
          </Button>
        </View>

        <Text style={styles.sectionTitle}>最近项目</Text>
        {recentProjects.map(project => (
          <Card key={project.id} style={styles.projectCard}>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Title
              title={project.title}
              subtitle={project.date}
              right={props => (
                <Button {...props} icon="dots-vertical" onPress={() => {}} >测试</Button>
              )}
            />
          </Card>
        ))}
      </ScrollView>

      <FAB icon="plus" style={styles.fab} onPress={() => {}} label="新建项目" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  projectCard: {
    marginBottom: 16,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Home;
