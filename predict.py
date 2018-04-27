import pandas as pd
import numpy
import sys
from sklearn.naive_bayes import GaussianNB
df = pd.read_csv('./training_data.csv', header=0)
gnb = GaussianNB()
raw_input = sys.argv[1].split(',')
int_input = [ int(i) for i in raw_input ]
x_train = df.loc[:, df.columns != 'activity']
y_train = df['activity']
gnb_fit = gnb.fit(x_train, y_train)
y_pred = gnb_fit.predict_proba(numpy.array([1,2,3,4,4]).reshape(1,-1))
activities = list(set(y_train))
activities.sort()
probs = y_pred.tolist()
bigboy = [zip(i, activities) for i in probs]
smallboy = bigboy[0]
smallboy.sort(reverse=True)
# print smallboy[0:5]
# print numpy.argsort(gnb_fit.predict_proba(numpy.array([3,4,2,1,4]).reshape(1,-1)), axis=1)[-5:]
# print to std
print smallboy
