import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Links = new Mongo.Collection('links');


if (Meteor.isServer) {
    Meteor.publish('linksPub', function () {
        return Links.find({userId: this.userId});
    });
}

Meteor.methods({
    'links.insert'(url) {
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Links.insert({
            url,
            userId: this.userId
        });
    }
});