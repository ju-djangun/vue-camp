---
title: Mixins vs HOC
---

# 믹스인과 하이 오더 컴포넌트 비교 분석

## HOC vs Mixins

하이 오더 컴포넌트는 리액트 진영의 함수형 프로그래밍에서 기반한 컴포넌트 개발 패턴입니다.
컴포넌트의 코드를 재사용하기 위한 방법이기도 하지만 캡슐화(encapsulation)과 컴포넌트 추상화를 구현하는 방법이기도 한데요.
컴포넌트의 로직을 훼손하지 않고 재사용성을 최대한 끌어올리겠다는 전략이기도 합니다.
예를 한번 들어볼게요.

## HOC를 이용한 접근 방식의 예

일반적으로 HOC를 이용하여 컴포넌트를 구현하게 되면 다음과 같이 컴포넌트 관계에서 층이 하나 더 생깁니다.

- 일반 : 상위 - 하위
- HOC : 상위 - **HOC** - 하위

위와 같이 HOC를 이용하여 컴포넌트를 개발해 나가는 경우 상위와 하위의 컴포넌트 로직은 변경하지 않은 채 기능을 확장해 나갈 수 있습니다.
가장 간단한 예로는 상위 컴포넌트에 특정 이미지를 로딩하기 위한 url만 주입하고, 하위에서는 그 url을 뿌리기만 하면 되겠네요.
추가적인 로직은 HOC에서 해결하면 되겠습니다.

## Mixins를 이용한 접근 방식

위와 같이 HOC를 이용한 접근 방식은 컴포넌트의 레이어를 복잡하게 만듭니다. 달리 말해 컴포넌트의 props, event 등을 넘겨야 하는 코드가 많아지죠.
이에 비해 mixins는 문법도 간단하고 입문자에게 버거운 HOC 사고 방식을 하지 않아도 되는 이점이 있습니다. 
물론 컴포넌트 기능 테스트 측면에서는 HOC가 mixins보다 유리합니다. 
관심사의 분리(sepration of concerns)라는 측면에서는 컴포넌트의 역할이 깨끗이 분리가 되면서 기능을 확장할 수 있기 때문입니다.

## 결론

따라서, 개인의 선호도 차이겠지만 뷰에서는 mixins나 scoped slot을 최대한 활용하고 그래도 함수형 프로그래밍이나 컴포넌트 재사용성을 극대화하고 싶다면
HOC를 활용하여 컴포넌트 코드를 재활용하는 방법을 추천합니다.