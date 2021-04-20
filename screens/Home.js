import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

import companies from './../data/companies';

export default function Home() {
  const [filter, setFilter] = useState('');
  const [userQualifications] = useState(['bike', 'drivers_license']);

  const getCompanies = (qualifications, companies, filter) => {
    let eligible = [];
    let ineligible = [];

    if (filter === '') {
      console.log('All available jobs are: ', companies);
      return companies;
    }
    companies.forEach((company) => {
      let matched = [];
      companyRules = company.requirements;
      companyRulesCond = companyRules[companyRules.length - 1];

      for (var i = 0; i < companyRules.length - 1; i++) {
        let userQualifiedBool = false;
        if (companyRules.length > 0) {
          userQualifiedBool = userHasRequirements(
            qualifications,
            companyRules[i]
          );
        } else {
          userQualifiedBool = true;
        }
        matched.push(userQualifiedBool);
      }

      if (companyMatch(matched, companyRulesCond)) {
        eligible.push(company);
      } else {
        ineligible.push(company);
      }
    });

    if (filter === 'eligible') {
      console.log('Jobs that matched user qualifications are: ', eligible);
      return eligible;
    } else {
      console.log('Jobs that matched user qualifications are: ', ineligible);
      return ineligible;
    }
  };

  const companyMatch = (matched, matchCondition) => {
    let valid = true;
    let findTruthy = matched.filter((item) => item === true);
    let findFalsy = matched.filter((item) => item === false);
    switch (matchCondition) {
      case 'none':
        if (findTruthy.length > 0) {
          break;
        }
      case 'or':
        if (findTruthy.length > 0) {
          break;
        }
      case 'and':
        if (findFalsy.length > 0) {
          valid = false;
          break;
        }
    }
    return valid;
  };

  const userHasRequirements = (qualifications, requirements) => {
    let valid = false;
    qualifications.forEach((badge) => {
      if (requirements.length > 0) {
        if (requirements.includes(badge)) {
          let reqCondition = requirements[requirements.length - 1];
          switch (reqCondition) {
            case 'or':
              valid = true;
              break;
            case 'none':
              valid = true;
              break;
            case 'and':
              let quit = false;
              requirements.forEach((requirement) => {
                if (!qualifications.includes(requirement)) {
                  valid = false;
                }
              });
              if (quit) {
                break;
              }
          }
        }
      } else {
        valid = true;
      }
    });
    return valid;
  };

  const Tag = ({ text }) => {
    return (
      <View style={styles.tag}>
        <Text style={styles.tagText}>{text.split('_').join(' ')}</Text>
      </View>
    );
  };

  const ListingCard = ({ listing }) => {
    const [bookMarked, setBookMarked] = useState(false);
    let imageLetter = listing.name
      .match(/\b(\w)/g)
      .join('')
      .substr(1, 2); // this is so that if the company name is like "Company Something Another", we get "SA" as the image letter otherwise, we get just "S"

    let deflatedRequirements = [].concat
      .apply([], listing.requirements)
      .filter((item) => {
        for (var cond in ['and', 'or', 'none']) {
          if (item === cond) {
            return false;
          }
          return true;
        }
      });

    return (
      <View style={styles.listingCard}>
        <View style={styles.listingCardHeader}>
          <View style={styles.listingImage}>
            <Text style={styles.listingImageText}>{imageLetter}</Text>
          </View>
          {/* This bookmarking feature is just for aesthetics (not functional yet) */}
          <TouchableOpacity
            onPress={() => {
              let bm = bookMarked;
              setBookMarked(!bm);
            }}
            activeOpacity={0.6}
            style={[
              styles.bookmarkWrap,
              bookMarked && { backgroundColor: Colors.secondary + '25' },
            ]}
          >
            <FontAwesome
              name={bookMarked ? 'bookmark' : 'bookmark-o'}
              size={18}
              color={bookMarked ? Colors.secondary : Colors.mutedText}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.listingCardBody}>
          <Text style={styles.listingCardTitle}>{listing.name}</Text>
          <Text style={styles.listingCardDescription}>
            Here's a really simple description from {listing.name} about the
            role being advertized...
          </Text>
          <View style={styles.tagsWrap}>
            {deflatedRequirements.map((tag, index) => {
              if (tag !== 'and' && tag !== 'or' && tag !== 'none') {
                return <Tag key={index.toString()} text={tag} />;
              }
            })}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWrap}>
        <Text style={styles.titleText}>
          {filter === ''
            ? 'All'
            : filter.charAt(0).toUpperCase() + filter.slice(1)}{' '}
          Job Listings (
          {getCompanies(userQualifications, companies, filter).length})
        </Text>
        <TouchableOpacity
          onPress={() => setFilter('')}
          disabled={filter === ''}
        >
          <Ionicons name='ios-refresh' size={24} color='black' />
        </TouchableOpacity>
      </View>

      <FlatList
        // data={companies}
        data={getCompanies(userQualifications, companies, filter)}
        renderItem={({ item }) => {
          return <ListingCard listing={item} />;
        }}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.content}
      />

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.blockButton, styles.buttonPrimary]}
          activeOpacity={0.6}
          onPress={() => setFilter('eligible')}
          disabled={filter === 'eligible'}
        >
          <Text style={[styles.buttonText, { color: Colors.white }]}>
            Show Eligible Jobs
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.blockButton, styles.buttonGray]}
          activeOpacity={0.6}
          onPress={() => setFilter('ineligible')}
          disabled={filter === 'ineligible'}
        >
          <Text style={[styles.buttonText, { color: Colors.darkGray }]}>
            Show Ineligible Jobs
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
