import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Links = new Mongo.Collection('links');


if (Meteor.isServer) {
    Meteor.publish('linksPub', function () {
        return Links.find({userId: this.userId});
    });
}